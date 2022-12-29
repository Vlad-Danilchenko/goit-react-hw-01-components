import PropTypes from 'prop-types';

import { StatsText } from './Stats.styled';

export const Stats = ({ label, percentage }) => {
  return (
    <>
      <StatsText className="label">{label}</StatsText>
      <StatsText className="percentage">{percentage} % </StatsText>
    </>
  );
};

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
