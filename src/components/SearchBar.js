import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
        />
    );
};

export default SearchBar;
