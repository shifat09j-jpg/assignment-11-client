


import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="navbar py-0 min-h-0 z-10 shadow-sm glass-card max-w-7xl mx-auto px-4">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/">
                <GoHomeFill /> Home
              </NavLink>
            </li>
            {(user?.role === "customer" || user?.role === "chef") && (
              <li>
                <NavLink to="/all-meals" className="text-primary font-bold">Meals</NavLink>
              </li>
            )}
            {/* {user?.role === "chef" && (
              <li>
                <NavLink to="/dashboard/chef/add-food" className="text-primary font-bold">Add Food</NavLink>
              </li>
            )} */}
            {/* {user?.role === "customer" && (
              <li>
                <NavLink to="/dashboard/customer/my-orders" className="text-primary font-bold">My Orders</NavLink>
              </li>
            )} */}
            {/* {user?.role === "customer" && (
              <li>
                <NavLink to="/dashboard/customer/payment-history" className="text-primary font-bold">Payment History</NavLink>
              </li>
            )} */}
            {user?.role === "admin" && (
              <li>
                <NavLink to="/dashboard/admin" className="text-primary font-bold">Admin Panel</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-3xl font-bold">
          Local<span className="text-primary">Chef</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink to="/" className="text-primary font-bold text-xl">
              <GoHomeFill /> Home
            </NavLink>
          </li>
          {(user?.role === "customer" || user?.role === "chef") && (
            <li>
              <NavLink to="/all-meals" className="text-primary font-bold text-xl">Meals</NavLink>
            </li>
          )}
          {user?.role === "chef" && (
            <li>
              <NavLink to="/dashboard/chef/add-food" className="text-primary font-bold text-xl">Add Food</NavLink>
            </li>
          )}
          {/* {user?.role === "customer" && (
            <li>
              <NavLink to="my-orders" className="text-primary font-bold text-xl">My Orders</NavLink>
            </li>
          )} */}
          {/* {user?.role === "customer" && (
            <li>
              <NavLink to="/payment-history" className="text-primary font-bold text-xl">Payment History</NavLink>
            </li>
          )} */}
          {user?.role === "admin" && (
            <li>
              <NavLink to="/dashboard/admin" className="text-primary font-bold text-xl">Admin Panel</NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="User Avatar"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <div className="pb-3 border-b border-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs font-medium">{user.email}</li>
              </div>
              <li>
                <Link to="/dashboard" className="font-bold text-xl text-primary py-3">Dashboard</Link>
              </li>
              <li>
                <button onClick={signOutUser} className="btn btn-xs bg-primary text-white">
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn rounded-full border-gray-300 btn-sm bg-primary text-white">
            <IoLogIn /> Login
          </Link>
        )}
      </div>

    </div>
  );
};

export default NavBar;
