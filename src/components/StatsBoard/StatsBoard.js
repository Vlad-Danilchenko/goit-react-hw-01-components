import PropTypes from 'prop-types';

import { Stats } from 'components/Stats/Stats';

export const StatsBoard = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <Stats label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
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
