import React from "react";
import Sidebar from "../components/Sidebar";
import "./students.css";
function Students() {
  const students = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Ramesh", email: "ramesh@gmail.com" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="page">
        <h1>👨‍🎓 Students</h1>

        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;