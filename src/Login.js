import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import logo from "./whatsapp-logo.png";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
