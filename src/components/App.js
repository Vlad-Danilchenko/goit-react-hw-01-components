import { Profile } from './Profile/Profile';
import { StatsTitle } from './StatsTitle/StatsTitle';
import { StatsBoard } from './StatsBoard/StatsBoard';
import { FriendList } from './FriendList/FriendList';

import user from '../user.json';
import statsArray from '../data.json';
import friendsArray from '../friends.json';
import transactionsArray from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <StatsTitle />
        <StatsBoard stats={statsArray} />
      </div>

      <div>
        <FriendList friends={friendsArray} />
      </div>

      <div>
        <TransactionHistory transactions={transactionsArray} />
      </div>
    </div>
  );
};
