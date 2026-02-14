import { Navigate, useLoaderData } from "react-router";


const Order = () => {
  const meal = useLoaderData();

  const handlePayment = async () => {
    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: meal.price,
        orderId: meal._id,
        foodName: meal.foodName || meal.food_name,
      }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else alert("Error creating checkout session");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Order: {meal.foodName || meal.food_name}</h2>
      <p>Price: ৳{meal.price}</p>

      <button
        className="bg-primary text-white px-4 py-2 rounded mt-4"
        onClick={handlePayment}
      >
        Pay Now
      </button>
  
    </div>
  );
};

export default Order;



// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "../components/CheckoutForm"; // যদি components ফোল্ডারে না থাকে, পরে বানাবো
// import { useLoaderData, useNavigate } from "react-router";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// const Order = () => {
//   const meal = useLoaderData();
//   const navigate = useNavigate();

//   if (!meal) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
//           <h2 className="text-3xl font-bold text-red-600 mb-4">খাবার পাওয়া যায়নি</h2>
//           <button
//             onClick={() => navigate("/all-meals")}
//             className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
//           >
//             সব খাবার দেখুন
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-indigo-100">
//           {/* Top Banner */}
//           <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-10 text-white">
//             <h1 className="text-4xl md:text-5xl font-extrabold">
//               {meal.foodName || meal.food_name || "অর্ডার করুন"}
//             </h1>
//             <p className="mt-4 text-2xl font-semibold">
//               মোট পরিমাণ: ৳{meal.price}
//             </p>
//           </div>

//           {/* Main Content */}
//           <div className="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
//             {/* Meal Info */}
//             <div className="space-y-8">
//               <div className="rounded-2xl overflow-hidden shadow-xl">
//                 <img
//                   src={meal.photo || "https://via.placeholder.com/600x500?text=" + (meal.foodName || "Food")}
//                   alt={meal.foodName}
//                   className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
//                 />
//               </div>

//               <div className="bg-indigo-50 p-6 rounded-2xl">
//                 <h3 className="text-xl font-bold mb-4 text-indigo-800">অর্ডারের তথ্য</h3>
//                 <div className="space-y-3 text-gray-800">
//                   <p><strong>ডেলিভারি সময়:</strong> {meal.estimated_time || "৩০-৪৫ মিনিট"}</p>
//                   {meal.ingredients && (
//                     <p><strong>উপকরণ:</strong> {meal.ingredients.join(", ")}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Payment Form */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">পেমেন্ট সম্পন্ন করুন</h2>
//                 <p className="text-gray-600">নিরাপদে পে করুন Stripe-এর মাধ্যমে</p>
//               </div>

//               <Elements stripe={stripePromise}>
//                 <CheckoutForm 
//                   price={meal.price} 
//                   foodName={meal.foodName || meal.food_name} 
//                 />
//               </Elements>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 text-center">
//           <button
//             onClick={() => navigate("/all-meals")}
//             className="px-10 py-4 bg-white border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50"
//           >
//             ← অন্য খাবার দেখুন
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
