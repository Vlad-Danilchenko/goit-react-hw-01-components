import PropTypes from 'prop-types';

import { Stats } from 'components/Stats/Stats';
import { StatsList, StatsItem } from './StatsBoard.styled';

export const StatsBoard = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(({ id, label, percentage }) => (
        <StatsItem key={id}>
          <Stats label={label} percentage={percentage} />
        </StatsItem>
      ))}
    </StatsList>
  );
};

StatsBoard.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      lable: PropTypes.string.isRequired,
      parcentage: PropTypes.number.isRequired,
    })
  ),
};
