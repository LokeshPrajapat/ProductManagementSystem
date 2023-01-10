
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext.js";
import "../styles/LoginSignup.css"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {/* <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}

<div class="container2">
      <div class="screen">
        <div class="screen__content">
        {error && <Alert variant="danger">{error}</Alert>}
          <form class="login" onSubmit={handleSubmit}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="text" class="login__input" controlId="formBasicEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" controlId="formBasicPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button class="button login__submit" type="Submit">
              <span class="button__text">Sign up</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          {/* <div class="social-login">
            <hr />
            <div className="social-icons">
              <GoogleButton className="social-login__ic" type="dark" onClick={handleGoogleSignIn} />
            </div>
          </div> */}
          <div className="p-2 box mt-3 text-center">
            Already have an account? <Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div >
    </>
  );
};

export default Signup;
