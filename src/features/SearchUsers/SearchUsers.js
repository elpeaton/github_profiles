/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Title,
  SearchInput,
  UsersWrapper,
  User,
  UserAvatar,
  UserData,
  UserName,
  UserLogin,
} from "./SearchUsersStyles";

function Users({ users }) {
  return (
    <UsersWrapper>
      <Link to="/user">
        <User>
          <UserAvatar src={users.avatar_url}></UserAvatar>
          <UserData>
            <UserName>{users.name}</UserName>
            <UserLogin>@{users.login}</UserLogin>
          </UserData>
        </User>
      </Link>
    </UsersWrapper>
  );
}

function SearchUsers() {
  const [text, setText] = useState("mojombo");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://api.github.com/users/${text}`);
      const data = await response.json();
      setUsers(data);
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
