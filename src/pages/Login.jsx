import React from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import {ThemeSupa} from '@supabase/auth-ui-shared'

const Login = () => {
const providers = ["google", "github"];


const customTheme = {
  ...ThemeSupa,
  default: {
    ...ThemeSupa.default,
    colors: {
      ...ThemeSupa.default.colors,
      brand: "#6f6af8", 
      brandAccent: "black", 
    },
  },
};
  return (
    <section className="register">
      <div className="auth-container">
        <h2>Sign In</h2>

        {/* Supabase Auth Component */}
        <Auth
          supabaseClient={supabase}
          theme="default"
          appearance={{ theme: customTheme }}
          providers={["github",]}
        />
      </div>
    </section>
  );
};

export default Login;
