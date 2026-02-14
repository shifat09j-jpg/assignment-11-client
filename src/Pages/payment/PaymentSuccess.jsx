import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const PaymentSuccess = () => {
  const { id: orderId } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Normally transactionId comes from Stripe webhook
    // For test mode, let's fake a transactionId
    const transactionId = "TEST_TXN_" + Date.now();

    if (user?.email) {
      fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          foodName: "Sample Food",  // ideally order.foodName
          price: 100,               // ideally order.price
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
    <div>
      {loading ? <p>Saving payment...</p> : <h2>Payment Successful!</h2>}
    </div>
  );
};

export default PaymentSuccess;
