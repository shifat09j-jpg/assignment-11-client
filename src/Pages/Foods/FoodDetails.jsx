

import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import PaymentButton from "../Dashboard/Customer/PaymentButton";


const FoodDetails = () => {
  const { id } = useParams(); 
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (!id) return; 
    fetch(`https://assignment-11-server2.vercel.app/meals/${id}`)
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