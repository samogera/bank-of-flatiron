import React from 'react';

function SearchBox({ searchValue, funcSetSearch }) {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search Recent Transactions..."
                value={searchValue}
                onChange={e => funcSetSearch(e.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    );
}

export default SearchBox;
