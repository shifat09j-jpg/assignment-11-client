// import React, { useEffect, useContext, useState } from "react";
// import { useParams } from "react-router";
// import { AuthContext } from "../../context/AuthContext";

// const PaymentSuccess = () => {
//   const { id: orderId } = useParams();
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
   
//     const transactionId = "TEST_TXN_" + Date.now();

//     if (user?.email) {
//       fetch("https://assignment-11-server2.vercel.app/payments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: user.email,
//           foodName: "Sample Food", 
//           price: 100,              
//           transactionId,
//         }),
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log("Payment saved:", data);
//         setLoading(false);
//       })
//       .catch(err => console.error(err));
//     }
//   }, [user, orderId]);

//   return (
//     <div class="items- center justify-center text-2xl font-bold h-screen">
//       {loading ? <p>Saving payment...</p> : <h2>Payment Successful!</h2>}
//     </div>
//   );
// };

// export default PaymentSuccess;


// import { useEffect, useState } from "react";

// const PaymentSuccess = ({ cartItems, user, totalAmount }) => {
//   const [status, setStatus] = useState("Processing your order...");
//   const backendUrl = import.meta.env.VITE_API_URL; // ✅ use env variable

//   useEffect(() => {
//     async function saveOrderAndPayment() {
//       try {
//         // Save order
//         const orderRes = await fetch(`${backendUrl}/orders`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             userEmail: user.email,
//             items: cartItems,
//             total: totalAmount,
//             date: new Date(),
//           }),
//         });
//         const orderData = await orderRes.json();

//         // Save payment
//         const paymentRes = await fetch(`${backendUrl}/payments`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             userEmail: user.email,
//             items: cartItems,
//             amount: totalAmount,
//             date: new Date(),
//           }),
//         });
//         const paymentData = await paymentRes.json();

//         setStatus("✅ Payment successful! Your order is confirmed.");
//         console.log("Order saved:", orderData);
//         console.log("Payment saved:", paymentData);
//       } catch (err) {
//         console.error("Saving order/payment failed:", err);
//         setStatus("❌ Something went wrong. Please contact support.");
//       }
//     }

//     saveOrderAndPayment();
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>{status}</h1>
//       <p>Thank you for your purchase!</p>
//     </div>
//   );
// };

// export default PaymentSuccess;



import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    if (!sessionId || !user?.email) {
      setStatus("error");
      toast.error("Invalid session or please login");
      setLoading(false);
      return;
    }

    const savePayment = async () => {
      try {
        const res = await fetch("https://assignment-11-server2.vercel.app/verify-and-save-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            userEmail: user.email,
          }),
        });

        const data = await res.json();

        if (data.success) {
          setStatus("success");
          toast.success("Payment Successful! 🎉 Order confirmed.");
        } else {
          setStatus("error");
          toast.error(data.message || "Payment verification failed");
        }
      } catch (err) {
        console.error(err);
        setStatus("error");
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    };

    savePayment();
  }, [sessionId, user]);

  return (
    <div className="flex items-center justify-center h-screen text-center px-4">
      <div className="max-w-md">
        {loading ? (
          <h2 className="text-3xl font-bold text-blue-600">Processing your payment...</h2>
        ) : status === "success" ? (
          <>
            <h2 className="text-4xl font-bold text-green-600 mb-4">Payment Successful! 🎉</h2>
            <p className="text-lg mb-6">Thank you for your order. Your payment has been confirmed.</p>
            <p className="text-gray-600 mb-4">Session ID: {sessionId}</p>
            <button
              onClick={() => navigate("/dashboard/payment-history")}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold"
            >
              View Payment History
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-lg mb-6">We couldn't verify your payment. Please contact support.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;