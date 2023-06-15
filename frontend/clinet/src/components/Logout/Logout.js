import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Logout.css";
const Logout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="logi">
      <h1>Edit Profile</h1>

      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Dhruv"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="pandedhruv98@gmail.com"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Current Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="New Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button">
        <Link classname="l">Edit</Link>
      </div>
      <div>or</div>
      <div className="button">
        <Link classname="l" to={"/"}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Logout;
