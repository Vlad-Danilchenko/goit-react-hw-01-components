import PropTypes from 'prop-types';
import { TD } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <TD>{type}</TD>
      <TD>{amount}</TD>
      <TD>{currency}</TD>
    </>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
