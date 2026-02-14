// import { useEffect, useState } from "react";
// import { useParams } from "react-router";


// const FoodDetails = () => {
//   const { id } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:3000/meals/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data); // check data structure
//         setMeal(data);  // backend sends full meal object
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading meal details...</p>;
//   if (!meal) return <p>Meal not found</p>;

//   const {
//     foodName,
//     chefName,
//     chefId,
//     price,
//     rating,
//     deliveryArea,
//     image,
//   } = meal;

//   return (
//     <div className="max-w-xl mx-auto p-4 space-y-4 border rounded shadow">
//       {image && (
//         <img
//           src={image}
//           alt={foodName}
//           className="w-full h-64 object-cover rounded"
//         />
//       )}
//       <h2 className="text-2xl font-bold">{foodName}</h2>
//       <p>👨‍🍳 Chef: {chefName}</p>
//       <p>🆔 Chef ID: {chefId}</p>
//       <p>💰 Price: ৳{price}</p>
//       <p>⭐ Rating: {rating}</p>
//       <p>📍 Delivery Area: {deliveryArea}</p>
//     </div>
//   );
// };

// export default FoodDetails;


// import React, { useEffect, useState, useContext } from "react";

// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, useParams } from "react-router";

// const FoodDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:3000/meals/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMeal(data);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleOrder = () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     const orderData = {
//       userId: user.uid,
//       userName: user.displayName,
//       userEmail: user.email,
//       mealId: meal._id,
//       mealName: meal.foodName,
//       chefId: meal.chefId,
//       price: meal.price,
//       status: "pending",
//     };

//     fetch("http://localhost:3000/orders", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(orderData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Order created:", data);
//         navigate(`/payment/${data._id}`); // redirect to payment page
//       });
//   };

//   if (loading) return <p>Loading meal details...</p>;
//   if (!meal) return <p>Meal not found</p>;

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded mt-6">
//       <h2 className="text-xl font-bold">{meal.foodName}</h2>
//       <p>👨‍🍳 Chef: {meal.chefName}</p>
//       <p>ID: {meal.chefId}</p>
//       <p>💰 Price: ৳{meal.price}</p>
//       <p>⭐ Rating: {meal.rating}</p>
//       <p>📍 Delivery Area: {meal.deliveryArea}</p>

//       <button
//         onClick={handleOrder}
//         className="mt-4 btn bg-primary text-white w-full"
//       >
//         Order & Pay
//       </button>
//     </div>
//   );
// };

// export default FoodDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // <-- ঠিকঠাক import
import PaymentButton from "../Dashboard/Customer/PaymentButton";


const FoodDetails = () => {
  const { id } = useParams(); // <-- id পাইছি route থেকে
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (!id) return; // safety check
    fetch(`http://localhost:3000/meals/${id}`)
      .then(res => res.json())
      .then(data => setMeal(data));
  }, [id]);

  if (!meal) return <p>Loading meal details...</p>;

  return (
    <div className="p-4">
      <h2>{meal.foodName}</h2>
      <p>Chef: {meal.chefName}</p>
      <p>Price: ৳{meal.price}</p>
      <p>Rating: {meal.rating}</p>
      <p>Delivery Area: {meal.deliveryArea}</p>

      {/* Payment button */}
      <PaymentButton meal={meal} />
    </div>
  );
};

export default FoodDetails;





