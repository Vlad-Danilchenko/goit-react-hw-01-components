import PropTypes from 'prop-types';

import { FriendItem } from 'components/FriendItem/FriendItem';
import { CardList, FriendCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <CardList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendCard>
      ))}
    </CardList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
