import React, { useState } from "react";
import TransactionsList from "./TransactionList";
import SearchTransaction from "./SearchTransaction";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchParam, setSearchParam] = useState("");
  const [transactions, setTransactions] = useState([]);
  
  const handleTransactionSearch = (searchValue) => {
    setSearchParam(searchValue);
  };

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
