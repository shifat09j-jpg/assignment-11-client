import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const PaymentSuccess = () => {
  const { id: orderId } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const transactionId = "TEST_TXN_" + Date.now();

    if (user?.email) {
      fetch("https://assignment-11-server2.vercel.app/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          foodName: "Sample Food", 
          price: 100,              
          transactionId,
        }),
      })
      .then(res => res.json())
      .then(data => {
        console.log("Payment saved:", data);
        setLoading(false);
      })
      .catch(err => console.error(err));
    }
  }, [user, orderId]);

  return (
    <div class="items- center justify-center text-2xl font-bold h-screen">
      {loading ? <p>Saving payment...</p> : <h2>Payment Successful!</h2>}
    </div>
  );
};

export default PaymentSuccess;


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
