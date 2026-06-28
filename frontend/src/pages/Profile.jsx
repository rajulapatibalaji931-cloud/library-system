import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "30px" }}>
      <h1>👤 Profile</h1>

      <hr />

      <h3>Name</h3>
      <p>{user?.name}</p>

      <h3>Email</h3>
      <p>{user?.email}</p>

      <h3>Role</h3>
      <p>{user?.role}</p>

      <br />

      <Link to="/dashboard">
        ← Back to Dashboard
      </Link>
    </div>
  );
}

export default Profile;