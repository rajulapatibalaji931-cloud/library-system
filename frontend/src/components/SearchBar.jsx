import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setKeyword(value);

    onSearch(value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search books..."
        value={keyword}
        onChange={handleChange}
        style={{
          width: "300px",
          padding: "10px"
        }}
      />
    </div>
  );
}

export default SearchBar;