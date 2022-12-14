import { Profile } from './Profile';
import users from '../user.json';

export const App = () => {
  return (
    <div>
      <Profile users={users} />
    </div>
  );
};
