import React, { useState } from "react";
import { auth } from "./firebase";
import {Link} from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password); // Use createUserWithEmailAndPassword from auth object
      console.log("User signed up successfully");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      <p> already a user! <Link to='/login'>Login</Link></p>
    </>
  );
};

export default Signup;
