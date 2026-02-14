// import { createBrowserRouter } from "react-router";
// import MainLayout from "../layout/MainLayout";
// import Home from "../Pages/Home/Home";
// import AllFoods from "../Pages/AllFoods/AllFoods";
// import PrivateRoute from "./PrivateRoute";
// import Profile from "../Pages/Profile/Profile";
// import AddFood from '../Pages/AddFood/AddFood';
// import FoodDetails from "../Pages/FoodDetails/FoodDetails";
// import MyFood from "../Pages/MyFood/MyFood";

// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";
// import Order from "../Pages/order/Order";
// import Payment from "../Pages/payment/Payment";
// import PaymentHistory from "../Pages/payment/paymentHistory";
// import PaymentSuccess from "../Pages/payment/PaymentSuccess";

// import { AuthContext } from "../context/AuthContext";





// export const router = createBrowserRouter ([
//     {
//       path: '/',
//       element: <MainLayout/>,
//       children: [
//         {
//           path:'/',
//           element:<Home/>,
          
//         },
//         // {
          
//         //   path:'/all-foods',
//         //   element:(
//         //     <PrivateRoute>
//         //   <AllFoods/>
//         //   </PrivateRoute>
//         //   ),
//         //   loader: () => fetch('http://localhost:3000/meals')
          
//         // },
//         {
//   path:'/all-meals',
//   element: (
//     <PrivateRoute>
//       <AllFoods/>
//     </PrivateRoute>
//   ),
//   loader: async () => {
//     const res = await fetch('http://localhost:3000/meals');
//     return res.json();
//   }
// },
//         {
//           path:'/profile',
//           element:(
//               <PrivateRoute>
//                 <Profile/>
//               </PrivateRoute>
//           )
          
//         },
//         {
//           path:'/addFood',
//           element:(
//            <PrivateRoute>
//               <AddFood/>
//             </PrivateRoute>
//           )
          
//         },
       
//         {
//           path:'/my-meals',
//           element: (
//             <PrivateRoute>
//               <MyFood/>
//             </PrivateRoute>
//           )
          
//         },
       
//         {
//           path:'/auth/login',
//           element: (
//             <PrivateRoute>
//           <Login></Login>
//          </PrivateRoute>
//           ) 
//         },
//         {
//           path:'/auth/register',
//           element:
//           (
//             <PrivateRoute>
//           <Register/>
//           </PrivateRoute>
//           )
//         },
//         {
//   path:'/meal-details/:id',
//   element: (
//     <PrivateRoute><FoodDetails/></PrivateRoute>
//   ),
//   loader: async ({ params }) => {
//     const res = await fetch(`http://localhost:3000/meals/${params.id}`);
//     const data = await res.json();
//     if (!data.success) throw new Error("Meal not found");
//     return data.result;
//   },
// },
// {
//   path:'/order/:id',
//   element: <PrivateRoute><Order/></PrivateRoute>,
//   loader: async ({ params }) => {
//     const res = await fetch(`http://localhost:3000/meals/${params.id}`);
//     const data = await res.json();
//     return data.result;
//   },
// },

// {
//  path: "/payment/:id",
//   element: <Payment />,
//   loader: async ({ params }) => {
//     const res = await fetch(`http://localhost:3000/orders/${params.id}`);
//     return res.json();
//   },
// },
// {

//   path: '/payment-history',
//   element: (
//     <PrivateRoute>
//      <PaymentHistory/>
//     </PrivateRoute>
//   )
// },
//     {
//     path: "/payment-success/:id",
//     element: <PaymentSuccess />, // loader এ user pass করার দরকার নেই
//     loader: async ({ params }) => {
//       const res = await fetch(`http://localhost:3000/orders/${params.id}`);
//       if (!res.ok) throw new Error("Order not found");
//       const data = await res.json();
//       return data;
//     },
//   },






       
        
//       ]
//     }
// ])


// import { createBrowserRouter } from "react-router";
// import MainLayout from "../layout/MainLayout";

// import Home from "../Pages/Home/Home";
// import AllFoods from "../Pages/AllFoods/AllFoods";
// import Profile from "../Pages/Profile/Profile";
// import AddFood from "../Pages/AddFood/AddFood";
// import FoodDetails from "../Pages/FoodDetails/FoodDetails";
// import MyFood from "../Pages/MyFood/MyFood";

// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";


// import Order from "../Pages/order/Order";
// import Payment from "../Pages/payment/Payment";
// import PaymentHistory from "../Pages/payment/paymentHistory";
// import PaymentSuccess from "../Pages/payment/PaymentSuccess";

// import PrivateRoute from "./PrivateRoute";


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,

//     children: [

//       // Home
//       {
//         path: "/",
//         element: <Home />,
//       },

//       // All Meals
//       {
//         path: "/all-meals",
//         element: (
//           <PrivateRoute>
//             <AllFoods />
//           </PrivateRoute>
//         ),
//         loader: async () => {
//           const res = await fetch("http://localhost:3000/meals");
//           return res.json();
//         },
//       },

//       // Profile
//       {
//         path: "/profile",
//         element: (
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         ),
//       },

//       // Add Food
//       {
//         path: "/addFood",
//         element: (
//           <PrivateRoute>
//             <AddFood />
//           </PrivateRoute>
//         ),
//       },

//       // My Meals
//       {
//         path: "/my-meals",
//         element: (
//           <PrivateRoute>
//             <MyFood />
//           </PrivateRoute>
//         ),
//       },

//       // Login
//       {
//         path: "/auth/login",
//         element: <Login />,
//       },

//       // Register
//       {
//         path: "/auth/register",
//         element: <Register />,
//       },

//       // Food Details
//       {
//         path: "/meal-details/:id",
//         element: (
//           <PrivateRoute>
//             <FoodDetails />
//           </PrivateRoute>
//         ),
//         loader: async ({ params }) => {
//           const res = await fetch(
//             `http://localhost:3000/meals/${params.id}`
//           );
//           return res.json();
//         },
//       },

//       // Order
//       {
//         path: "/order/:id",
//         element: (
//           <PrivateRoute>
//             <Order />
//           </PrivateRoute>
//         ),
//         loader: async ({ params }) => {
//           const res = await fetch(
//             `http://localhost:3000/meals/${params.id}`
//           );
//           return res.json();
//         },
//       },

//       // Payment
//       {
//         path: "/payment/:id",
//         element: (
//           <PrivateRoute>
//             <Payment />
//           </PrivateRoute>
//         ),
//         loader: async ({ params }) => {
//           const res = await fetch(
//             `http://localhost:3000/orders/${params.id}`
//           );
//           return res.json();
//         },
//       },

//       // Payment History
//       {
//         path: "/payment-history",
//         element: (
//           <PrivateRoute>
//             <PaymentHistory />
//           </PrivateRoute>
//         ),
//       },

//       // Payment Success (FIXED)
//       {
//         path: "/payment-success/:id",

//         element: (
//           <PrivateRoute>
//             <PaymentSuccess />
//           </PrivateRoute>
//         ),

//         loader: async ({ params }) => {
//           const res = await fetch(
//             `http://localhost:3000/orders/${params.id}`
//           );

//           // ❗ No error throw anymore
//           if (!res.ok) {
//             return null;
//           }

//           return res.json();
//         },
//       },
//     ],
//   },
// ]);









// Layout
import { createBrowserRouter } from "react-router";

// Layouts
import MainLayout from "../layout/MainLayout";


// Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// Foods


// Order & Payment
import Order from "../pages/Order/Order";
import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";

// Dashboard


// Private Route
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
