import React, { useState } from 'react';
import TransactionRow from './TransactionRow';
import AddTransaction from './AddTransaction';
import SearchBox from './searchBox';

function TableTransaction({ records }) {
    const [stateRecords, setStateRecords] = useState(records);
    const [searchValue, setSearch] = useState("");

    const filteredRecords = stateRecords.filter(data => data.description.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <div className="container">
            <SearchBox searchValue={searchValue} funcSetSearch={setSearch} />
            <AddTransaction funcSetData={setStateRecords} />
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecords.map((data, index) => (
                        <TransactionRow
                            key={index}
                            date={data.date}
                            description={data.description}
                            category={data.category}
                            amount={data.amount}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableTransaction;
