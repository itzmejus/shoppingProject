import React, { useState } from "react";
import "../Styles/Account.css";
import Axios from "axios";

import user from "../media/user.png";
import Navbar from "../Pages/Navbar";
function Account() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState(false);

  const saveAddress = () => {
    Axios.post("http://localhost:5000/address", {
      email: email,
      address: address,
      phone: phone,
    })
      .then(() => {
        alert("success");
      })
      .catch("failed");
  };

  const log = (e) => {
    e.preventDefault();
    console.log("logged success");
  };
  return (
    <div>
      <Navbar />
      <div className="account">
        <div className="profile">
          <div className="profile-left">
            <h1>Christophor</h1>
            <img src={user} alt="profile" />
          </div>
          <div className="profilesection">
            <h1 onClick={() => setState(!state)}>click</h1>
            {state ? (
              <div className="profile-right">
                <h1>Details</h1>
                <h2>
                  email
                  <input
                    type="email"
                    placeholder="please enter mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </h2>
                <h2>
                  address
                  <input
                    type="text"
                    placeholder="please enter mail"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                  />
                </h2>
                <h2>
                  phone
                  <input
                    type="tel"
                    placeholder="please enter mail"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                </h2>
                <button onClick={saveAddress}>submit</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
