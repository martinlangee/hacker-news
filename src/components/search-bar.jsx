import React, { useState } from "react";

const SearchBar = ({ searchFunc }) => {
  const [searchExpr, setSearchExpr] = useState("");

  const onChangeSearchExpr = (e) => {
    e.preventDefault();
    setSearchExpr(e.target.value);
    console.log(e.target.value);
  };

  const onStartSearch = (e) => {
    e.preventDefault();
    if (searchExpr) searchFunc(searchExpr);
  };

  return (
    <div className="search-bar">
      <div>Find news items</div>
      <div className="search-bar-input">
        <form onSubmit={onStartSearch}>
          <input
            type="text"
            placeholder="Enter search expression"
            onChange={onChangeSearchExpr}
          />
          <button>Search...</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
