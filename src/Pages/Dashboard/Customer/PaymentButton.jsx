import React from "react";

const PaymentButton = ({ meal }) => {

  if (!meal) return null;

  const handlePayment = () => {
   
    fetch("https://assignment-11-server2.vercel.app/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: meal.price,       
        foodName: meal.foodName, 
       orderId: meal._id,
       
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url; 
        }
      });
  };

  return (
    <button
      className="btn btn-primary mt-4"
      onClick={handlePayment}
    >
      Pay ৳{meal.price}
    </button>
  );
};

export default PaymentButton;
