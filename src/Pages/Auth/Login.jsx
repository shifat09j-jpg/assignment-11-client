

import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    toast.loading("Logging in...", { id: "login-user" });

    try {
      const userCredential = await signInUser(email, password);
      console.log(userCredential.user);
      toast.success("Logged in successfully!", { id: "login-user" });
      navigate("/"); // Login successful, redirect to home
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: "login-user" });
    }
  };

  const handleGoogleSignIn = async () => {
    toast.loading("Signing in with Google...", { id: "google-login" });
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
      toast.success("Logged in successfully!", { id: "google-login" });
      navigate("/"); // Google login successful
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: "google-login" });
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn w-full bg-primary text-white mt-2"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full mt-3 bg-white border text-black flex items-center justify-center gap-2"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="text-center mt-2">
          Don't have an account?{" "}
          <Link className="text-blue-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


