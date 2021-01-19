import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 45px 25px;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  background-color: #f4f4f6;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 400;
  color: #babbc1;
  padding: 1rem;
  margin-bottom: 2rem;
  ::placeholder {
    color: #babbc1;
  }
`;

//Users
export const UsersWrapper = styled.div`
  border-top: 1px solid #babbc1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const User = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #babbc1;
`;

export const UserAvatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const UserData = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const UserNameText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: black;
`;

export const UserLogin = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #9a9a9d;
  text-decoration: none;
`;
