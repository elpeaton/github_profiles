/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Title,
  SearchInput,
  UsersWrapper,
  StyledLink,
  User,
  UserNameText,
  UserAvatar,
  UserData,
  UserLogin,
} from "./SearchUsersStyles";

function UserName({ login }) {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const fetchUserName = async () => {
      const response = await fetch(`https://api.github.com/users/${login}`, {
        method: "GET",
        headers: {
          Authorization: `token ${process.env.REACT_APP_PT}`,
        },
      });
      const data = await response.json();
      setUserName(data.name);
    };
    fetchUserName();
  }, [login]);
  console.log(userName);
  console.log(login);

  return <div>{userName && <UserNameText>{userName}</UserNameText>}</div>;
}

function Users({ users }) {
  return (
    <UsersWrapper>
      {users?.map((user) => (
        <StyledLink to={`/users/${user.login}`} key={user.id}>
          <User>
            <UserAvatar src={user.avatar_url}></UserAvatar>
            <UserData>
              <UserName login={user.login} />
              <UserLogin>@{user.login}</UserLogin>
            </UserData>
          </User>
        </StyledLink>
      ))}
    </UsersWrapper>
  );
}

function SearchUsers() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${text}%20in:fullname`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.REACT_APP_PT}`,
          },
        }
      );
      const data = await response.json();
      setUsers(data.items);
    };

    const timerId = setTimeout(fetchUsers, 1000);

    return () => clearTimeout(timerId);
  }, [text]);
  console.log(users);
  return (
    <Wrapper>
      <Title>Github Users</Title>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Users users={users} />
    </Wrapper>
  );
}

export default SearchUsers;
