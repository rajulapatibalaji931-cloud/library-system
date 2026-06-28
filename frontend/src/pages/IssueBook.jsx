import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./issuebook.css";
function IssueBook() {
  const [student, setStudent] = useState("");
  const [book, setBook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Book "${book}" issued to ${student}`);

    setStudent("");
    setBook("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>📖 Issue Book</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            required
          />

          <br /><br />

          <input
            type="text"
            placeholder="Book Name"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            required
          />

          <br /><br />

          <button type="submit">Issue Book</button>

        </form>
      </div>
    </div>
  );
}

export default IssueBook;