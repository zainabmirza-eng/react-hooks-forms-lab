import React, { useState } from "react";

function Filter({ onSearchChange }) {
  const [searchText, setSearchText] = useState("testing");

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text); // Pass the search text to the parent component
  };

  return (
    <div className="Filter">
      <input
        onChange={handleChange}
        value={searchText}
        type="text"
        name="search"
        placeholder="Search..."
      />
    </div>
  );
}

export default Filter;
