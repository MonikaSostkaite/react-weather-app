import React from 'react';

import './index.scss';

const Search = ({ value, error, onSubmit, onChange }) => (
    <section>
        <div>
            <div className="title">Check the weather in:</div>
            <input
                name="searchValue"
                type="text"
                placeholder="Enter location ..."
                value={value}
                onChange={onChange}
            />
            <div className="error-message">{error}</div>
        </div>
        <button 
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={error || !value}
        >
            Submit
        </button>
    </section>
    
);

export default Search;