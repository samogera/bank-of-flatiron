import React, { useState, useEffect } from "react";

function AddTransactionForm({ transactions, setTransactions }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => setError(error.message));
  }, []);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Failed to add transaction. Please try again later.");
        }
        return result.json();
      })
      .then((data) => {
        const newTransactionData = [...transactions, data];
        setTransactions(newTransactionData);
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: 0,
        });
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="ui segment">
      {error && <div className="ui negative message">{error}</div>}
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleOnChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
