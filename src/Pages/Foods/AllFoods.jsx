import React, { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";

const AllFoods = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then((data) => {
        console.log("All meals:", data);
        setMeals(data);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        All Meals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <FoodCard key={meal._id} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default AllFoods;
