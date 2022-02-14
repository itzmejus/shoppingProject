import React, { useState } from "react";
import "../Styles/Login.css";
import Axios from "axios";

import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const registerUser = () => {
    Axios.post("http://localhost:5000/adduser" ,{name: name,email:email,password: password}).then(()=>{
      alert('success')
    }).catch('failed')
  };

  const log = (e) => {
    e.preventDefault();
    console.log("logged success");
  };
  return (
    <form method="POST" className="login">
      <div className="logincard">
        <h1>Resgister</h1>

        <input
          type="text"
          placeholder="please enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="email"
          placeholder="please enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="please enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button onClick={registerUser}>Login</button>
      </div>
    </form>
  );
}

export default Login;
