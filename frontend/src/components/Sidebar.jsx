import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>📚 Library</h2>

      <hr />

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

        <Link to="/dashboard" style={btnStyle}>
          🏠 Dashboard
        </Link>

        <Link to="/books" style={btnStyle}>
          📚 Books
        </Link>

        <Link to="/add-book" style={btnStyle}>
          ➕ Add Book
        </Link>

        <Link to="/students" style={btnStyle}>
          👨‍🎓 Students
        </Link>

        <Link to="/issue-book" style={btnStyle}>
          📖 Issue Book
        </Link>

        <Link to="/return-book" style={btnStyle}>
          🔄 Return Book
        </Link>

        <Link to="/my-books" style={btnStyle}>
          📕 My Books
        </Link>

        <Link to="/profile" style={btnStyle}>
          👤 Profile
        </Link>

      </div>
    </div>
  );
}

const btnStyle = {
  display: "block",
  background: "#34495e",
  color: "white",
  padding: "12px",
  borderRadius: "8px",
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "bold",
};

export default Sidebar;