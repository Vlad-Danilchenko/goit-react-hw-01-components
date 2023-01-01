import PropTypes from 'prop-types';

import { StatsList, StatsItem, Title, StatsText } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsText className="label">{label}</StatsText>
            <StatsText className="percentage">{percentage} % </StatsText>
          </StatsItem>
        ))}
      </StatsList>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      lable: PropTypes.string.isRequired,
      parcentage: PropTypes.number.isRequired,
    })
  ),
};
