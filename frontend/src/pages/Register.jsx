import React, { useState } from "react";

import { useNavigate, Link }
from "react-router-dom";

import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name,setName]=useState("");

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const [role,setRole]=useState("student");

  const handleRegister = async(e)=>{

    e.preventDefault();

    try{

      await api.post("/auth/register",{

        name,

        email,

        password,

        role

      });

      alert("Registration Successful");

      navigate("/");

    }

    catch(error){

      alert(

        error.response?.data?.message ||

        "Registration Failed"

      );

    }

  };

  return(

    <div
      style={{
        width:"400px",
        margin:"50px auto"
      }}
    >

      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>

        <input

          type="text"

          placeholder="Name"

          value={name}

          onChange={(e)=>

          setName(e.target.value)}

          required

        />

        <br /><br />

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>

          setEmail(e.target.value)}

          required

        />

        <br /><br />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>

          setPassword(e.target.value)}

          required

        />

        <br /><br />

        <select

          value={role}

          onChange={(e)=>

          setRole(e.target.value)}

        >

          <option value="student">

            Student

          </option>

          <option value="admin">

            Admin

          </option>

        </select>

        <br /><br />

        <button type="submit">

          Register

        </button>

      </form>

      <br />

      <Link to="/">

        Already have an account?

      </Link>

    </div>

  );

}

export default Register;