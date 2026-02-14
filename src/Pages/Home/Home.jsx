import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import FoodCard from '../../components/FoodCard';

const Home = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/meals')
    .then(res => res.json())
    .then(data => {
      console.log("Fetched meals:", data); 
      setMeals(data);
    });
}, [])

  const topRatedmeals = meals
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
    return (
        <div>
          <Banner/> 
          <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Featured Meals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {topRatedmeals.map(meal => (
            <FoodCard key={meal._id} meal={meal} />
          ))}
        </div>
            <div className="text-center mt-10">
          <button
            onClick={() => window.location.href = "/all-meals"}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary"
          >
            Show All Meals
          </button>
        </div>
      </section>

        </div>
    );
};

export default Home;