
// import { createBrowserRouter } from "react-router";

// import MainLayout from "../layout/MainLayout";


// import Login from "../pages/Auth/Login";
// import Register from "../pages/Auth/Register";

// import Payment from "../pages/Payment/Payment";
// import PaymentSuccess from "../pages/Payment/PaymentSuccess";

// import PrivateRoute from "./PrivateRoute";
// import AllFoods from "../Pages/Foods/AllFoods";
// import FoodDetails from "../Pages/Foods/FoodDetails";
// import MyFood from "../Pages/Foods/MyFood";
// import CustomerHome from "../Pages/Dashboard/Customer/CustomerHome";
// import MyOrders from "../Pages/Dashboard/Customer/MyOrders";
// import PaymentHistory from "../Pages/Dashboard/Customer/PaymentHistory";
// import ChefHome from "../Pages/Dashboard/Chef/ChefHome";
// import AddFood from "../Pages/Dashboard/Chef/AddFood";
// import MyFoods from "../Pages/Dashboard/Chef/MyFoods";
// import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
// import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
// import Order from "../Pages/order/Order";
// import Home from "../Pages/Home/Home";

// export const router = createBrowserRouter([

//   // ================= MAIN =================
//   {
//     path: "/",
//     element: <MainLayout />,

//     children: [

//       {
//         path: "/",
//         element: <Home />,
//       },

//       // Auth
//       {
//         path: "/login",
//         element: <Login />,
//       },

//       {
//         path: "/register",
//         element: <Register />,
//       },

//       // Foods
//       {
//         path: "/all-meals",
//         element: <AllFoods />,
//       },

//       {
//         path: "/meal-details/:id",
//         element: (
//           <PrivateRoute>
//             <FoodDetails />
//           </PrivateRoute>
//         ),
//       },

//       {
//         path: "/my-meal",
//         element: (
//           <PrivateRoute>
//             <MyFood />
//           </PrivateRoute>
//         ),
//       },

//       // Order
//       {
//         path: "/order/:id",
//         element: (
//           <PrivateRoute>
//             <Order />
//           </PrivateRoute>
//         ),
//       },

//       // Payment
//       {
//         path: "/payment/:id",
//         element: (
//           <PrivateRoute>
//             <Payment />
//           </PrivateRoute>
//         ),
//       },

//       {
//         path: "/payment-success/:id",
//         element: <PaymentSuccess />,
//       },

//     ],
//   },


//   // ================= DASHBOARD =================
//   {
//     path: "/dashboard",

//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),

//     children: [

//       // Default
//       {
//         index: true,
//         element: <CustomerHome />,
//       },

//       // ================= CUSTOMER =================
//       {
//         path: "customer",
//         element: <CustomerHome />,
//       },

//       {
//         path: "my-orders",
//         element: <MyOrders />,
//       },

//       {
//         path:  "payment-history",
//         element: <PaymentHistory />,
//       },


//       // ================= CHEF =================
//       {
//         path: "chef",
//         element: <ChefHome />,
//       },

//       {
//         path: "add-food",
//         element: <AddFood />,
//       },

//       {
//         path: "my-foods",
//         element: <MyFoods />,
//       },


//       // ================= ADMIN =================
//       {
//         path: "admin",
//         element: <AdminHome />,
//       },

//     ],
//   },

// ]);


// src/routes/routes.jsx
 // ✅ fixed import
// import MainLayout from "../layout/MainLayout";

// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";

// import Payment from "../Pages/Payment/Payment";
// import PaymentSuccess from "../Pages/Payment/PaymentSuccess";

// import PrivateRoute from "./PrivateRoute";
// import AllFoods from "../Pages/Foods/AllFoods";
// import FoodDetails from "../Pages/Foods/FoodDetails";
// import MyFood from "../Pages/Foods/MyFood";
// import CustomerHome from "../Pages/Dashboard/Customer/CustomerHome";
// import MyOrders from "../Pages/Dashboard/Customer/MyOrders";
// import PaymentHistory from "../Pages/Dashboard/Customer/PaymentHistory";
// import ChefHome from "../Pages/Dashboard/Chef/ChefHome";
// import AddFood from "../Pages/Dashboard/Chef/AddFood";
// import MyFoods from "../Pages/Dashboard/Chef/MyFoods";
// import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
// import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
// import Order from "../Pages/order/Order";
// import Home from "../Pages/Home/Home";
// import { createBrowserRouter } from "react-router";

// export const router = createBrowserRouter([
//   // ================= MAIN =================
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />, // default home page
//       },

//       // Auth
//       { path: "login", element: <Login /> },
//       { path: "register", element: <Register /> },

//       // Foods
//       { path: "all-meals", element: <AllFoods /> },

//       {
//         path: "meal-details/:id",
//         element: (
//           <PrivateRoute>
//             <FoodDetails />
//           </PrivateRoute>
//         ),
//       },

//       {
//         path: "my-meal",
//         element: (
//           <PrivateRoute>
//             <MyFood />
//           </PrivateRoute>
//         ),
//       },

//       // Orders
//       {
//         path: "order/:id",
//         element: (
//           <PrivateRoute>
//             <Order />
//           </PrivateRoute>
//         ),
//       },

//       // Payment
//       {
//         path: "payment/:id",
//         element: (
//           <PrivateRoute>
//             <Payment />
//           </PrivateRoute>
//         ),
//       },

//       { path: "payment-success/:id", element: <PaymentSuccess /> },
//     ],
//   },

//   // ================= DASHBOARD =================
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       // Customer Dashboard
//       { index: true, element: <CustomerHome /> },
//       { path: "customer", element: <CustomerHome /> },
//       { path: "my-orders", element: <MyOrders /> },
//       { path: "payment-history", element: <PaymentHistory /> },

//       // Chef Dashboard
//       { path: "chef", element: <ChefHome /> },
//       { path: "add-food", element: <AddFood /> },
//       { path: "my-foods", element: <MyFoods /> },

//       // Admin Dashboard
//       { path: "admin", element: <AdminHome /> },
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";


import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";

import PrivateRoute from "./PrivateRoute";
import AllFoods from "../Pages/Foods/AllFoods";
import FoodDetails from "../Pages/Foods/FoodDetails";
import MyFood from "../Pages/Foods/MyFood";
import CustomerHome from "../Pages/Dashboard/Customer/CustomerHome";
import MyOrders from "../Pages/Dashboard/Customer/MyOrders";
import PaymentHistory from "../Pages/Dashboard/Customer/PaymentHistory";
import ChefHome from "../Pages/Dashboard/Chef/ChefHome";
import AddFood from "../Pages/Dashboard/Chef/AddFood";
import MyFoods from "../Pages/Dashboard/Chef/MyFoods";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Order from "../Pages/order/Order";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([

  // ================= MAIN =================
  {
    path: "/",
    element: <MainLayout />,

    children: [

      {
        path: "/",
        element: <Home />,
      },

      // Auth
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      // Foods
      {
        path: "/all-meals",
        element: <AllFoods />,
      },

      {
        path: "/meal-details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-meal",
        element: (
          <PrivateRoute>
            <MyFood />
          </PrivateRoute>
        ),
      },

      // Order
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },

      // Payment
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },

      {
        path: "/payment-success/:id",
        element: <PaymentSuccess />,
      },

    ],
  },


  // ================= DASHBOARD =================
  {
    path: "/dashboard",

    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [

      // Default
      {
        index: true,
        element: <CustomerHome />,
      },

      // ================= CUSTOMER =================
      {
        path: "customer",
        element: <CustomerHome />,
      },

      {
        path: "my-orders",
        element: <MyOrders />,
      },

      {
        path:  "payment-history",
        element: <PaymentHistory />,
      },


      // ================= CHEF =================
      {
        path: "chef",
        element: <ChefHome />,
      },

      {
        path: "add-food",
        element: <AddFood />,
      },

      {
        path: "my-foods",
        element: <MyFoods />,
      },


      // ================= ADMIN =================
      {
        path: "admin",
        element: <AdminHome />,
      },

    ],
  },

]);