import PropTypes from 'prop-types';

import { Transaction } from 'components/Transaction/Transaction';
import {
  TransactionTable,
  TebleHead,
  TableRow,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <tr>
          <TebleHead>Type</TebleHead>
          <TebleHead>Amount</TebleHead>
          <TebleHead>Currency</TebleHead>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <Transaction type={type} amount={amount} currency={currency} />
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
