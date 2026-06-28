import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import MyBooks from "./pages/MyBooks";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/books" element={<Books />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/edit-book/:id" element={<EditBook />} />
      <Route path="/my-books" element={<MyBooks />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/students" element={<Students />} />
      <Route path="/issue-book" element={<IssueBook />} />
      <Route path="/return-book" element={<ReturnBook />} />
    </Routes>
  );
}

export default App;