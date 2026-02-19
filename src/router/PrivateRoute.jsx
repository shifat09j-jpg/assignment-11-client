// // import React, { useContext } from 'react';
// // import { AuthContext } from '../context/AuthContext';
// // import { Navigate, useLocation } from 'react-router';

// // const PrivateRoute = ({children}) => {
// //     const{user, loading} = useContext(AuthContext);
// //     const location = useLocation();
// //     if(loading){
// //         return(
// //             <div className='flex justify-center items-center h-screen'>
// //               <span className="loading loading-dots loading-xl"></span>
// //             </div>
// //         );
// //     }
   
// //     if (!user) {
// //      return (
// //       <Navigate
// //         to="/auth/login"
// //         state={{ from: location }}
// //         replace
// //       />
// //     );
// //     }

// //     return children;
// // };

// // export default PrivateRoute;



// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate, useLocation } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <span className="loading loading-dots loading-xl"></span>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <Navigate
//         to="/auth/login"
//         state={{ from: location }}
//         replace
//       />
//     );
//   }

//   return children;
// };

// export default PrivateRoute;

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />; // login required
  if (role && user.role !== role) return <Navigate to="/" />; // role mismatch

  return children;
};

export default PrivateRoute;


