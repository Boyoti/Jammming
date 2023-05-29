import React from "react";

import "./SearchBar.css";

const SearchBarView = ({ onTermChange, onSearch }) => {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={onTermChange} />
      <button className="SearchButton" onClick={onSearch}>
        SEARCH 
      </button>
    </div>
  );
};

export default SearchBarView;