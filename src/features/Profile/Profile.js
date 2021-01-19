/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { css } from "@emotion/react";
import {
  Header,
  LocationBox,
  Icon,
  ProfileWrapper,
  TextData,
  UserLocation,
  UserLogin,
  MainData,
  UserName,
  NumericData,
  UserNumericData,
  UserLabelNumericData,
} from "./ProfileStyles";
import locationIcon from "../../assets/location.svg";
import backIcon from "../../assets/back.svg";

function Profile() {
  let { login } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.github.com/users/${login}`, {
        method: "GET",
        headers: {
          Authorization: `token a10eae0094be5529c2ce227a73a5e961bf326cad`,
        },
      });
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [login]);
  console.log(user);
  console.log(login);

  return (
    <ProfileWrapper>
      <MainData
        css={css`
          background-image: url(${user.avatar_url});
        `}
      >
        <Header>
          <Link to="/search">
            <Icon src={backIcon} alt="Back" />
          </Link>
        </Header>
        <TextData>
          {user.name && <UserName>{user.name}</UserName>}
          <UserLogin>@{user.login}</UserLogin>
          {user.location && (
            <LocationBox>
              <Icon src={locationIcon} alt="Location" />
              <UserLocation>{user.location}</UserLocation>
            </LocationBox>
          )}
        </TextData>
      </MainData>
      <NumericData>
        <UserNumericData>{user.public_repos}</UserNumericData>
        <UserNumericData>{user.followers}</UserNumericData>
        <UserNumericData>{user.following}</UserNumericData>
        <UserLabelNumericData>Repos</UserLabelNumericData>
        <UserLabelNumericData>Followers</UserLabelNumericData>
        <UserLabelNumericData>Following</UserLabelNumericData>
      </NumericData>
    </ProfileWrapper>
  );
}

export default Profile;
