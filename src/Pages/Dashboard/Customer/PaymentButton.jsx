import React from "react";

const PaymentButton = ({ meal }) => {
  // safety check: meal না থাকলে কিছু render করবে না
  if (!meal) return null;

  const handlePayment = () => {
    // এখানে তুমি backend কে call করবে Stripe session তৈরি করার জন্য
    fetch("https://assignment-11-server2.vercel.app/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: meal.price,       // ✅ এখন safe
        foodName: meal.foodName, // ✅ safe
       orderId: meal._id,
        // orderId: "some-order-id" // পরে real orderId insert করবে
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url; // stripe checkout site
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
