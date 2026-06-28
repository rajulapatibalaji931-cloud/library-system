import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <header className="navbar">
        <h2>📚 Library Management System</h2>

        <button onClick={logout}>Logout</button>
      </header>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#f4f6f9",
            minHeight: "100vh",
          }}
        >
          <h1>Dashboard</h1>

          <div className="cards">
            <div className="card green">
              <h2>250</h2>
              <p>Total Books</p>
            </div>

            <div className="card blue">
              <h2>120</h2>
              <p>Students</p>
            </div>

            <div className="card orange">
              <h2>45</h2>
              <p>Issued Books</p>
            </div>

            <div className="card purple">
              <h2>180</h2>
              <p>Returned Books</p>
            </div>
          </div>

          <div className="welcome">
            <h2>Welcome to Library Management System 📚</h2>

            <p>
              Use the menu to manage Books, Students, Issue Book, Return Book,
              and Profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;