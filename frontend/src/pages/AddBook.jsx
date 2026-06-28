import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./addbook.css";
function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/books", book);

      alert("Book Added Successfully");

      navigate("/books");
    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to Add Book"
      );
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px" }}
        />

        <br /><br />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px" }}
        />

        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px" }}
        />

        <br /><br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={book.quantity}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px" }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;