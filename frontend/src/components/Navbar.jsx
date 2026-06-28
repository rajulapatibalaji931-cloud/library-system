import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>📚 Library Management</h2>

      <div>
        <Link
          to="/dashboard"
          style={{ color: "white", marginRight: "15px" }}
        >
          Dashboard
        </Link>

        <Link
          to="/books"
          style={{ color: "white", marginRight: "15px" }}
        >
          Books
        </Link>

        <Link
          to="/my-books"
          style={{ color: "white", marginRight: "15px" }}
        >
          My Books
        </Link>

        <Link
          to="/profile"
          style={{ color: "white", marginRight: "15px" }}
        >
          Profile
        </Link>

        <button
          onClick={logout}
          style={{
            padding: "8px 15px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;