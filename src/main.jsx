// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// import { router } from "./router/routes.jsx";
// import AuthProvider from "./context/AuthProvider.jsx";
// import { RouterProvider } from "react-router";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/routes.jsx";
// import AuthProvider from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AuthProvider from "./context/AuthProvider.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </AuthProvider>
  </StrictMode>
);


