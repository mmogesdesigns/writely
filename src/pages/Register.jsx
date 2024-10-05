import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className="register">
      <div>
        <h2>Sign Up</h2>
        <button className="btn primary" onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
          Sign Up with Auth0
        </button>
        <small>Already have an account? <Link to='/login'>Sign in</Link></small>
      </div>
    </section>
  );
};

export default Register;
