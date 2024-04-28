import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from backend server
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data)) // Set data directly as transactions state
      .catch(error => console.error('Error fetching transactions:', error));
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>${Number(transaction.amount).toFixed(2)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
