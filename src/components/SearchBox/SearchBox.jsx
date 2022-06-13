import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onFocusing, onBlurring, onChanging }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Type keywords..."
        className="search-input"
        onFocus={(e) => onFocusing(e.type)}
        onBlur={(e) => onBlurring(e.type)}
        onChange={(e) => onChanging(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
