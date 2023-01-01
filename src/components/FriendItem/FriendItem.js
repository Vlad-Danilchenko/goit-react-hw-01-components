import PropTypes from 'prop-types';

import { FriendsAvatar, Status } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status userStatus={isOnline} />
      <FriendsAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
