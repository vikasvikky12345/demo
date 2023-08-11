import React, { useState } from "react";
import { auth } from "./firebase"; // Import the auth object from your firebase.js file
import {Link} from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password); // Use the imported auth object
      console.log("Logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>Email</label>:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p> new User !<Link to='/signup'/></p>
    </>
  );
};

export default Login;
