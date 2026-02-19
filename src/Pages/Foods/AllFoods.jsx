// import React, { useEffect, useState } from "react";
// import FoodCard from "../../components/FoodCard";

// const AllFoods = () => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     fetch("https://assignment-11-server-lovat-nu.vercel.app/meals")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("All meals:", data);
//         setMeals(data);
//       });
//   }, []);

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center mb-10 text-primary">
//         All Meals
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {meals.map((meal) => (
//           <FoodCard key={meal._id} meal={meal} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllFoods;


// import React, { useEffect, useState } from "react";
// import FoodCard from "../../components/FoodCard";

// const AllFoods = () => {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMeals = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/meals");
//         if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

//         const data = await res.json();
//         setMeals(data);
//       } catch (err) {
//         console.error("Failed to fetch meals:", err);
//         setError("Unable to load meals. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeals();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading meals...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
//   if (!meals.length) return <p className="text-center mt-10">No meals found.</p>;

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center mb-10 text-primary">
//         All Meals
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {meals.map((meal) => (
//           <FoodCard key={meal._id} meal={meal} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllFoods;

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

