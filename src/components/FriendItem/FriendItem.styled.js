import styled from '@emotion/styled';

const usersStatus = props => {
  switch (props.userStatus) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return '#000';
  }
};

export const Status = styled.span`
  background-color: ${usersStatus};
  width: 20px;
  height: 20px;
  margin-right: 30px;
  border-radius: 50%;
`;

export const FriendsAvatar = styled.img`
  margin-right: 30px;
`;
