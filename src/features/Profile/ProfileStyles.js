import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  width: 100%;
  max-height: 667px;
`;

export const MainData = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
`;

export const Header = styled.div`
  padding: 45px;
`;

export const TextData = styled.div`
  padding: 0 45px 55px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(77, 159, 208, 1)
  );
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const UserName = styled.p`
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 4px;
`;

export const UserLogin = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 13px;
  height: 19px;
`;

export const UserLocation = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 5px;
`;

export const NumericData = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 190px;
  border-radius: 30px;
  border: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 15px;
  grid-column-gap: 25px;
  grid-row-gap: 12px;
  border-bottom: 1px solid #5b6678;
  padding: 25px 50px 45px;
  position: absolute;
  top: 500px;
`;

export const UserNumericData = styled.div`
  background-color: #f4f4f6;
  border-radius: 15px;
  color: #047195;
  font-size: 2rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserLabelNumericData = styled.p`
  color: #a1a1a4;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
