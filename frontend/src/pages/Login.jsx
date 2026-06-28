import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post("/auth/login", {
        email,
        password
      });

      login(res.data.user, res.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div
      style={{
        width: "400px",
        margin: "50px auto"
      }}
    >

      <h2>Library Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          required
        />

        <br /><br />

        <button type="submit">

          Login

        </button>

      </form>

      <br />

      <Link to="/register">

        New User? Register

      </Link>

    </div>

  );

}

export default Login;