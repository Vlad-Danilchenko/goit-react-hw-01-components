import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {/* <span class="status"></span> */}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
