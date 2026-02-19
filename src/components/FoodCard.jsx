// import { Link } from "react-router";


// const FoodCard = ({ meal }) => {
//   // Safety check: যদি food undefined হয়, null return করবে
//   if (!meal) return null;

//   // Destructure safely
//   const {
//     _id,
//     chefName,
//     chefId,
//     foodName,
//     foodImage,
//     price,
//     rating,
//     deliveryArea,
//   } = meal || {}; // extra safety

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition">
//       <img
//         src={foodImage || "https://via.placeholder.com/400x300?text=No+Image"}
//         alt={foodName || "Unknown Food"}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-4 space-y-2">
//         <h2 className="text-xl font-semibold">{foodName || "No Name"}</h2>

//         <p className="text-gray-600">👨‍🍳 Chef: {chefName || "Unknown"}</p>

//         <p className="text-gray-500 text-sm">🆔 Chef ID: {chefId || "-"}</p>

//         <p className="text-gray-700">
//           💰 Price: <span className="font-medium">{price ? `৳${price}` : "-"}</span>
//         </p>

//         <p className="text-yellow-500 font-semibold">
//           ⭐ Rating: {rating || "-"}
//         </p>

//         <p className="text-gray-500 text-sm">📍 Delivery: {deliveryArea || "Unknown"}</p>

//         <div className="flex justify-end pt-3">
//           <Link
//   to={`/meal-details/${_id || id}`}
//   className="px-4 py-2 bg-primary text-white rounded-lg"
// >
//   View Details
// </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;

// import { Link } from "react-router";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";
//  // login check

// const FoodCard = ({ meal }) => {
//   const { _id, chefName, chefId, foodName, foodImage, price, rating, deliveryArea } = meal;
//   const { user } = useContext(AuthContext); // check if user is logged in

//   return (
//     <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      
//       {/* Food Image */}
//       <img
//         src={foodImage}
//         alt={foodName}
//         className="w-full h-48 object-cover"
//       />

//       {/* Info */}
//       <div className="p-4 space-y-2">
//         <h2 className="text-lg font-semibold">{foodName}</h2>
//         <p>👨‍🍳 Chef: {chefName}</p>
//         <p>🆔 Chef ID: {chefId}</p>
//         <p>💰 Price: ৳{price}</p>
//         <p>⭐ Rating: {rating}</p>
//         <p>📍 Delivery Area: {deliveryArea}</p>

//         {/* See Details Button */}
//         <Link
//           to={user ? `/meal-details/${_id}` : "/login"}
//           className={`inline-block mt-3 px-4 py-2 rounded-lg text-white bg-primary hover:bg-primary/90 transition`}
//         >
//           See Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;

 // ✅ fixed import
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
 // login check

const FoodCard = ({ meal }) => {
  const { _id, chefName, chefId, foodName, foodImage, price, rating, deliveryArea } = meal;
  const { user } = useContext(AuthContext); // check if user is logged in

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      
      {/* Food Image */}
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover"
      />

      {/* Info */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{foodName}</h2>
        <p>👨‍🍳 Chef: {chefName}</p>
        <p>🆔 Chef ID: {chefId}</p>
        <p>💰 Price: ৳{price}</p>
        <p>⭐ Rating: {rating}</p>
        <p>📍 Delivery Area: {deliveryArea}</p>

        {/* See Details Button */}
        <Link
          to={user ? `/meal-details/${_id}` : "/login"}
          className={`inline-block mt-3 px-4 py-2 rounded-lg text-white bg-primary hover:bg-primary/90 transition`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;