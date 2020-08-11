import React from "react";
import "./search-box.style.css";

export default ({ placeholder, handleSearchField, type }) => {
  return (
    <input
      className="search"
      onChange={handleSearchField}
      type={type}
      placeholder={placeholder}
    />
  );
};
