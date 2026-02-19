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
      fetch("http://localhost:3000/payments", {
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
    <div>
      {loading ? <p>Saving payment...</p> : <h2>Payment Successful!</h2>}
    </div>
  );
};

export default PaymentSuccess;