import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 250px;
  padding: 15px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  margin: 20px auto;
  border-radius: 8px;
`;

export const AboutUser = styled.div`
  padding: 20px;
  text-align: center;
`;
export const ProfileImg = styled.img`
  width: 200px;
  border-radius: 50%;
`;
export const UserInfo = styled.p`
  color: #474747;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  list-style: none;
  padding: 15px;
  background-color: #62b8fc;
  border: 1px solid #7888f5;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;
export const LabelValue = styled.span`
  display: block;
`;
