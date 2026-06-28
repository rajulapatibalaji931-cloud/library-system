import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./returnbook.css";
function ReturnBook() {
  const [book, setBook] = useState("");

  const handleReturn = (e) => {
    e.preventDefault();

    alert(`${book} returned successfully`);

    setBook("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>🔄 Return Book</h1>

        <form onSubmit={handleReturn}>

          <input
            type="text"
            placeholder="Book Name"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            required
          />

          <br /><br />

          <button type="submit">Return Book</button>

        </form>
      </div>
    </div>
  );
}

export default ReturnBook;