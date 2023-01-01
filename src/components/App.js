import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../data/user.json';
import statsArray from '../data/data.json';
import friendsArray from '../data/friends.json';
import transactionsArray from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container, StatsBox } from './App.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <StatsBox>
        <Statistics title="Upload stats" stats={statsArray} />
      </StatsBox>

      <div>
        <FriendList friends={friendsArray} />
      </div>

      <div>
        <TransactionHistory transactions={transactionsArray} />
      </div>
    </Container>
  );
};
