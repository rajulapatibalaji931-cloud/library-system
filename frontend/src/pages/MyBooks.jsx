import React from "react";
import Sidebar from "../components/Sidebar";
import "./mybook.css";
function MyBooks() {

  const books = [
    "Java Programming",
    "React JS",
    "MongoDB Basics",
    "Node.js Guide",
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>📚 My Books</h1>

        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyBooks;