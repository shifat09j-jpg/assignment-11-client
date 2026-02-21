


import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
 

const FoodCard = ({ meal }) => {
  const { _id, chefName, chefId, foodName, foodImage, price, rating, deliveryArea } = meal;
  const { user } = useContext(AuthContext);

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