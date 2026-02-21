

import { createBrowserRouter } from "react-router"; 
import MainLayout from "../layout/MainLayout";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../Pages/payment/PaymentSuccess";
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
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageFoods from "../Pages/Dashboard/Admin/ManageFoods";
import ApplyForChef from "../Pages/Dashboard/Customer/ApplyForChef";

export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      { path: "/all-meals",
         element: (<PrivateRoute>
          <AllFoods /> 
          </PrivateRoute>) ,
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

      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },

      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },

     
      {
        path: "/success",
        element: <PaymentSuccess />,
      },
    ],
  },

 
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <CustomerHome /> },

     
      { path: "customer", element: <CustomerHome /> },
      { path: "my-orders", element: <MyOrders /> },
      { path: "payment-history", element: <PaymentHistory /> },
      {
        path:"customer/apply-chef",
        element: <ApplyForChef/>
      },

     
      { path: "chef", element: <ChefHome /> },
      { path: "chef/add-food", element: <AddFood /> },
      { path: "chef/my-foods", element: <MyFoods /> },

     
      { path: "admin", element: <AdminHome /> },
      {
        path:"admin/manage-users",
        element: <ManageUsers/>
      },
      {
        path:"admin/manage-foods",
        element: <ManageFoods/>
      },
    ],
  },
]);