

import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    toast.loading("Creating user...", { id: "create-user" });

    try {
      // 🔹 userCredential ব্যবহার করার দরকার নেই
      await createUser(email, password);
      await updateUserProfile(displayName, photoURL);

      toast.success("User created successfully!", { id: "create-user" });
      navigate("/"); // redirect to home
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: "create-user" });
    }
  };

  const handleGoogleSignIn = async () => {
    toast.loading("Signing in with Google...", { id: "google-login" });
    try {
      await signInWithGoogle(); // result ব্যবহার না করলে warning আসবে না
      toast.success("Logged in successfully!", { id: "google-login" });
      navigate("/"); // redirect to home
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: "google-login" });
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-2">
          <input
            type="text"
            name="displayName"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
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
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full mt-3 bg-white border text-black flex items-center justify-center gap-2"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

