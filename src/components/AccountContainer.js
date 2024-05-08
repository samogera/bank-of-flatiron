import React, { useState, useEffect } from 'react';
import TransactionsList from "./TransactionList";
import SearchTransaction from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchParam, setSearchParam] = useState("");
  const [transactions, setTransactions] = useState([]);
  
  const handleTransactionSearch = (searchValue) => {
    setSearchParam(searchValue);
  };
 //Featch all transaction from server
 useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}`)
    .then((r) => r.json())
    .then((data) => setTransactions(data)) //Setter activity for transaction after server response, this is the data in state when the app first loads
}, [])

//Re-renders page with updated state after creating a new transaction, use this when trying to re render with updated data
function updatedTransactions(newTransactions) {
 const updatedTransactionsArray = [...transactions, newTransactions]
 setTransactions(updatedTransactionsArray)
}
  return (
    <div>
      <SearchTransaction
        searchParam={searchParam}
        onTransactionSearch={handleTransactionSearch}
      />
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionsList
        transactions={transactions}
        setTransactions={setTransactions}
        searchParam={searchParam}
      />
    </div>
  );
}

export default AccountContainer;
