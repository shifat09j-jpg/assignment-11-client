// import { useEffect, useState } from "react";
// import { useParams } from "react-router";


// const FoodDetails = () => {
//   const { id } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`)
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
//     fetch(`https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`)
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

//     fetch("https://assignment-11-server-lovat-nu.vercel.app/orders", {
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

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router"; 
// import PaymentButton from "../Dashboard/Customer/PaymentButton";


// const FoodDetails = () => {
//   const { id } = useParams(); 
//   const [meal, setMeal] = useState(null);

//   useEffect(() => {
//     if (!id) return; 
//     fetch(`https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`)
//       .then(res => res.json())
//       .then(data => setMeal(data));
//   }, [id]);

//   if (!meal) return <p>Loading meal details...</p>;

//   return (
//     <div className="p-4  ">
//       <h2>{meal.foodName}</h2>
//       <p>Chef: {meal.chefName}</p>
//       <p>Price: ৳{meal.price}</p>
//       <p>Rating: {meal.rating}</p>
//       <p>Delivery Area: {meal.deliveryArea}</p>

//       {/* Payment button */}
//       <PaymentButton meal={meal} />
//     </div>
//   );
// };

// export default FoodDetails;

// import React, { useEffect, useState } from "react";
//  // ✅ use react-router-dom
// import PaymentButton from "../Dashboard/Customer/PaymentButton";
// import { useParams } from "react-router";

// const FoodDetails = () => {
//   const { id } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true); // ✅ loading state
//   const [error, setError] = useState(null); // ✅ error handling

//   useEffect(() => {
//     if (!id) return;

//     const fetchMeal = async () => {
//       try {
//         const res = await fetch(
//           `https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`
//         );
//         if (!res.ok) throw new Error("Failed to fetch meal");
//         const data = await res.json();
//         setMeal(data);
//       } catch (err) {
//         console.error("Error fetching meal:", err.message);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeal();
//   }, [id]);

//   if (loading) return <p className="text-center py-10">Loading meal details...</p>;
//   if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
//   if (!meal) return <p className="text-center py-10">Meal not found.</p>;

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
//       <h2 className="text-2xl font-bold mb-4">{meal.foodName}</h2>
//       <p className="mb-2">👨‍🍳 Chef: {meal.chefName}</p>
//       <p className="mb-2">💰 Price: ৳{meal.price}</p>
//       <p className="mb-2">⭐ Rating: {meal.rating}</p>
//       <p className="mb-4">📍 Delivery Area: {meal.deliveryArea}</p>

//       {/* Payment button */}
//       <PaymentButton meal={meal} />
//     </div>
//   );
// };

// export default FoodDetails;

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, useParams } from "react-router";

// const FoodDetails = () => {
//   const { id } = useParams(); // meal ID from URL
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMeal = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch(
//           `https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`
//         );

//         if (!res.ok) {
//           throw new Error(`Server responded with status ${res.status}`);
//         }

//         const data = await res.json();
//         setMeal(data);
//       } catch (err) {
//         console.error("Error fetching meal:", err);
//         setError("Failed to fetch meal. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeal();
//   }, [id]);

//   const handleOrder = async () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const orderData = {
//         userId: user.uid,
//         userName: user.displayName,
//         userEmail: user.email,
//         mealId: meal._id,
//         mealName: meal.foodName,
//         chefId: meal.chefId,
//         price: meal.price,
//         status: "pending",
//       };

//       const res = await fetch(
//         "https://assignment-11-server-lovat-nu.vercel.app/orders",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(orderData),
//         }
//       );

//       if (!res.ok) throw new Error(`Order failed: ${res.status}`);

//       const data = await res.json();
//       console.log("Order created:", data);
//       navigate(`/payment/${data._id}`); // redirect to payment page
//     } catch (err) {
//       console.error(err);
//       alert("Failed to create order. Please try again.");
//     }
//   };

//   if (loading) return <p>Loading meal details...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;
//   if (!meal) return <p>Meal not found</p>;

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded mt-6">
//       <h2 className="text-2xl font-bold mb-2">{meal.foodName}</h2>
//       <img
//         src={meal.image || "https://via.placeholder.com/400"}
//         alt={meal.foodName}
//         className="w-full rounded mb-2"
//       />
//       <p>👨‍🍳 Chef: {meal.chefName}</p>
//       <p>ID: {meal.chefId}</p>
//       <p>💰 Price: ৳{meal.price}</p>
//       <p>⭐ Rating: {meal.rating || "N/A"}</p>
//       <p>📍 Delivery Area: {meal.deliveryArea || "N/A"}</p>
//       <p className="mt-2">{meal.description}</p>

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

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, useParams } from "react-router";

// const FoodDetails = () => {
//   const { id } = useParams(); // meal ID from URL
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMeal = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch(
//           `https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`
//         );

//         if (!res.ok) {
//           throw new Error(`Server responded with status ${res.status}`);
//         }

//         const data = await res.json();
//         setMeal(data);
//       } catch (err) {
//         console.error("Error fetching meal:", err);
//         setError("Failed to fetch meal. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeal();
//   }, [id]);

//   const handleOrder = async () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const orderData = {
//         userId: user.uid,
//         userName: user.displayName,
//         userEmail: user.email,
//         mealId: meal._id,
//         mealName: meal.foodName,
//         chefId: meal.chefId,
//         price: meal.price,
//         status: "pending",
//       };

//       const res = await fetch(
//         "https://assignment-11-server-lovat-nu.vercel.app/orders",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(orderData),
//         }
//       );

//       if (!res.ok) throw new Error(`Order failed: ${res.status}`);

//       const data = await res.json();
//       console.log("Order created:", data);
//       navigate(`/payment/${data._id}`); // redirect to payment page
//     } catch (err) {
//       console.error(err);
//       alert("Failed to create order. Please try again.");
//     }
//   };

//   if (loading) return <p>Loading meal details...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;
//   if (!meal) return <p>Meal not found</p>;

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded mt-6">
//       <h2 className="text-2xl font-bold mb-2">{meal.foodName}</h2>
//       <img
//         src={meal.image || "https://via.placeholder.com/400"}
//         alt={meal.foodName}
//         className="w-full rounded mb-2"
//       />
//       <p>👨‍🍳 Chef: {meal.chefName}</p>
//       <p>ID: {meal.chefId}</p>
//       <p>💰 Price: ৳{meal.price}</p>
//       <p>⭐ Rating: {meal.rating || "N/A"}</p>
//       <p>📍 Delivery Area: {meal.deliveryArea || "N/A"}</p>
//       <p className="mt-2">{meal.description}</p>

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

// FoodDetails.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import CheckoutForm from "../../components/CheckoutForm";

// const FoodDetails = () => {
//   const { id } = useParams();
//   const [meal, setMeal] = useState(null);
//   const [orderId, setOrderId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://assignment-11-server-lovat-nu.vercel.app/meals/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMeal(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, [id]);

//   // Create order on load
//   useEffect(() => {
//     if (meal && !orderId) {
//       fetch(`https://assignment-11-server-lovat-nu.vercel.app/orders`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: "test@example.com", // replace with logged-in user
//           foodId: meal._id,
//           foodName: meal.name,
//           price: meal.price,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => setOrderId(data.orderId))
//         .catch((err) => console.log(err));
//     }
//   }, [meal]);

//   if (loading) return <p>Loading...</p>;
//   if (!meal) return <p>Meal not found</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{meal.name}</h1>
//       <p className="mt-2">{meal.description}</p>
//       <p className="mt-2 font-semibold">Price: ${meal.price}</p>

//       <div className="mt-4">
//         {orderId ? <CheckoutForm orderId={orderId} meal={meal} /> : "Creating order..."}
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import PaymentButton from "../Dashboard/Customer/PaymentButton";


const FoodDetails = () => {
  const { id } = useParams(); 
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (!id) return; 
    fetch(`http://localhost:3000/meals/${id}`)
      .then(res => res.json())
      .then(data => setMeal(data));
  }, [id]);

  if (!meal) return <p>Loading meal details...</p>;

  return (
    <div className="p-4  ">
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