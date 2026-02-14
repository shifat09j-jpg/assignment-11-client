// import { useContext } from "react";

// import { AuthContext } from "../../context/AuthContext";
// import { FaGoogle } from "react-icons/fa";
// import { toast } from "react-hot-toast";
// import { Link, useLocation, useNavigate } from "react-router";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   /* ---------------- Email Login ---------------- */

//   const handleLogIn = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       const result = await signInUser(email, password);

//       console.log("Login Success:", result.user);

//       toast.success("Login successful!");
//       form.reset();

//       navigate(from, { replace: true });
//     } catch (error) {
//       console.error("Login Error:", error);

//       if (error.code === "auth/wrong-password") {
//         toast.error("Wrong password!");
//       } else if (error.code === "auth/user-not-found") {
//         toast.error("User not found!");
//       } else if (error.code === "auth/network-request-failed") {
//         toast.error("Network error!");
//       } else {
//         toast.error("Login failed!");
//       }
//     }
//   };

//   /* ---------------- Google Login ---------------- */

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithGoogle();

//       console.log("Google Login:", result.user);

//       toast.success("Google login successful!");

//       navigate(from, { replace: true });
//     } catch (error) {
//       console.error("Google Error:", error);

//       if (error.code === "auth/popup-closed-by-user") {
//         toast.error("Popup closed!");
//       } else if (error.code === "auth/network-request-failed") {
//         toast.error("Network error!");
//       } else {
//         toast.error("Google login failed!");
//       }
//     }
//   };

//   return (
//     <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl border border-gray-200">

//       <div className="card-body">

//         <h1 className="text-3xl font-bold text-center mb-4">
//           Login
//         </h1>

//         {/* Email Login */}
//         <form onSubmit={handleLogIn}>

//           <label className="label">Email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="input input-bordered rounded-full w-full mb-3"
//             placeholder="Email"
//           />

//           <label className="label">Password</label>
//           <input
//             type="password"
//             name="password"
//             required
//             className="input input-bordered rounded-full w-full mb-3"
//             placeholder="Password"
//           />

//           <div className="mb-3">
//             <a className="link link-hover text-sm">
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="btn w-full text-white rounded-full bg-gradient-to-r from-pink-500 to-red-600 mb-3"
//           >
//             Login
//           </button>

//         </form>

//         {/* Google Button */}
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn bg-white rounded-full text-black border w-full flex items-center justify-center mb-4"
//         >
//           <FaGoogle className="mr-2" />
//           Login with Google
//         </button>

//         {/* Register */}
//         <p className="text-center text-sm">
//           New here?{" "}
//           <Link
//             to="/auth/register"
//             className="text-blue-500 font-semibold"
//           >
//             Register
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Login;

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


