// const CheckoutForm = ({ orderId }) => {

//   const handlePay = async () => {

//     const data = {
//       price: 20, // demo price
//       foodName: "Meal Order",
//       orderId,
//     };

//     try {

//       const res = await fetch(
//         "https://assignment-11-server2.vercel.app/create-checkout-session",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await res.json();

//       if (result?.url) {
//         window.location.replace(result.url);
//       } else {
//         alert("Payment session failed!");
//       }

//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="text-center">

//       <button
//         onClick={handlePay}
//         className="bg-green-600 text-white px-6 py-2 rounded"
//       >
//         Pay Now
//       </button>

//     </div>
//   );
// };

// export default CheckoutForm;


// import React from "react";

// const CheckoutForm = ({ meal }) => {
//   const handlePay = async () => {
//     try {
//       const res = await fetch("https://assignment-11-server2.vercel.app/create-checkout-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ price: meal.price, foodName: meal.foodName, orderId: meal._id }),
//       });

//       const data = await res.json();
//       if (data.url) window.location.href = data.url;
//     } catch (err) {
//       console.log("Stripe Error:", err);
//     }
//   };

//   return <button onClick={handlePay}>Pay ${meal.price}</button>;
// };

// export default CheckoutForm;


import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CheckoutForm = ({ orderId }) => {
  const { user } = useContext(AuthContext);

  const handlePay = async () => {

    if(!user){
      alert("Please login first");
      return;
    }

    const data = {
      price: 20,
      foodName: "Meal Order",
      orderId,
    };

    const res = await fetch("https://assignment-11-server2.vercel.app/create-checkout-session", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if(result?.url){
      window.location.href = result.url;
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handlePay}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default CheckoutForm;