import React, { useState, useEffect } from 'react';

function TransactionList({ searchParam }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const handleDeleteTransaction = (transactionId) => {
    // Filter out the transaction with the given id
    const updatedTransactions = transactions.filter(transaction => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
  };

  // Filter transactions based on searchParam
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div>
      <h2>Your Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th> {/* New column for delete button */}
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>${Number(transaction.amount).toFixed(2)}</td>
              <td>
                <button onClick={() => handleDeleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
