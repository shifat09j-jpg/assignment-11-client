


import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const CheckoutForm = ({ orderId, price, foodName }) => {  
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);  

  const handlePay = async () => {
    if (!user) {
      alert("Please login first to make payment");
      return;
    }

    setLoading(true); 

    const data = {
      price: price || 20,  
      foodName: foodName || "Meal Order",
      orderId,
    };

    try {
      const res = await fetch("https://assignment-11-server2.vercel.app/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const result = await res.json();

      if (result?.url) {
        window.location.href = result.url;
      } else {
        alert("Error creating checkout session. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Check console or try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handlePay}
        disabled={loading}
        className={`bg-green-600 text-white px-6 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"}`}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default CheckoutForm;