import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import AdminDashboard from '../admin/AdminDashboard';
import UserDashboard from '../admin/UserDashboard';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', user);
      const { email, firstname, lastname, role } = response.data;
      setLoggedInUser({ email, firstname, lastname, role });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form-container">
      {loggedInUser ? (
        <>
          <p className="login-success">Logged in as {`${loggedInUser.firstname} ${loggedInUser.lastname}`}</p>
          {loggedInUser.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <UserDashboard />
          )}
        </>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email_input">Email</label>
          <input 
            type="email"
            placeholder="email"
            id="email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <br/>
          <label htmlFor="password_input">Password</label>
          <input 
            type="password"
            placeholder="password"
            id="password_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <br/>
          <button type="submit" className="login-button">Login</button>
        </form>
      )}
    </div>
  );  
}


export default LoginForm;
