import React from "react";

function SearchTransaction({ searchParam, onTransactionSearch }) {
  function handleTransactionSearch(evt) {
    onTransactionSearch(evt.target.value);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        name="searchParam"
        value={searchParam}
        placeholder="Search your recent transactions"
        onChange={handleTransactionSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default SearchTransaction;