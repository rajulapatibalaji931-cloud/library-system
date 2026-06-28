import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./books.css";
function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    if (!window.confirm("Delete this book?")) return;

    try {
      await api.delete(`/books/${id}`);
      alert("Book Deleted Successfully");
      fetchBooks();
    } catch (error) {
      alert("Unable to delete book");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 Books</h1>

      <Link to="/dashboard">
        <button>⬅ Back to Dashboard</button>
      </Link>

      <Link to="/add-book" style={{ marginLeft: "10px" }}>
        <button>Add Book</button>
      </Link>

      <br />
      <br />

      <table
        border="1"
        cellPadding="10"
        width="100%"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.quantity}</td>

                <td>
                  <Link to={`/edit-book/${book._id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() => deleteBook(book._id)}
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align="center">
                No Books Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Books;