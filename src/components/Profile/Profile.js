import { Stats } from 'components/Stats/Stats';
import {
  ProfileImg,
  StatsList,
  StatsItem,
  Label,
  LabelValue,
  UserInfo,
  AboutUser,
  ProfileCard,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <AboutUser>
        <ProfileImg src={avatar} alt="User avatar" />
        <p>{username}</p>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </AboutUser>

      <StatsList>
        <StatsItem>
          <Label className="label">Followers</Label>
          <LabelValue className="quantity">{followers}</LabelValue>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <LabelValue className="quantity">{views}</LabelValue>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <LabelValue className="quantity">{likes}</LabelValue>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};
