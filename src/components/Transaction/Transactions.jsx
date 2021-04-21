import React from 'react';
import styles from './Transactions.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    const markups = items.map(({id, type, amount, currency}) =>
    (<tr className={styles.tableBoxes} key={id}>
      <td className={styles.tableBox}>{type}</td>
      <td className={styles.tableBox}>{amount}</td>
      <td className={styles.tableBox}>{currency}</td>
    </tr>
    ))

    return (<table className={styles.transactionHistory}>
  <thead>
    <tr className={styles.head}>
      <th className={styles.header}>Type</th>
      <th className={styles.header}>Amount</th>
      <th className={styles.header}>Currency</th>
    </tr>
        </thead>
        <tbody>
            {markups}
        </tbody>
</table>)
};

TransactionHistory.defaultProps = {
    currency: 'US'
}

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

export default TransactionHistory;