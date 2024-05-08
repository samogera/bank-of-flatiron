import React, { useState } from 'react';

function AddTransaction({ funcSetData }) {
    const [indate, setDate] = useState("");
    const [indescription, setDescription] = useState("");
    const [incategory, setCategory] = useState("");
    const [inamount, setAmount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let newTransaction = {
            date: indate,
            description: indescription,
            category: incategory,
            amount: parseFloat(inamount),
        }
        funcSetData(InstateRecords => [...InstateRecords, newTransaction]);
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add Transaction</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="date" className="form-control" required value={indate} name='date' onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder='Description' name='Description' value={indescription} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder='Category' name='category' onChange={(e) => setCategory(e.target.value)} value={incategory} />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" required placeholder='Amount' name='amount' onChange={(e) => setAmount(e.target.value)} value={inamount} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Transaction</button>
                </form>
            </div>
        </div>
    );
}

export default AddTransaction;
