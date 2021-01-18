/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
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
  return (
    <ProfileWrapper>
      <MainData>
        <Header>
          <Link to="/search">
            <Icon src={backIcon} alt="Back" />
          </Link>
        </Header>
        <TextData>
          <UserName>Tom Preston-Werner</UserName>
          <UserLogin>@mojombo</UserLogin>
          <LocationBox>
            <Icon src={locationIcon} alt="Location" />
            <UserLocation>San Francisco</UserLocation>
          </LocationBox>
        </TextData>
      </MainData>
      <NumericData>
        <UserNumericData>62</UserNumericData>
        <UserNumericData>22303</UserNumericData>
        <UserNumericData>11</UserNumericData>
        <UserLabelNumericData>Repos</UserLabelNumericData>
        <UserLabelNumericData>Followers</UserLabelNumericData>
        <UserLabelNumericData>Following</UserLabelNumericData>
      </NumericData>
    </ProfileWrapper>
  );
}

export default Profile;
