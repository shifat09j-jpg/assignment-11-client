// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import Banner from "../../components/Banner";
// import FoodCard from "../../components/FoodCard";

// const Home = () => {

//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   /* ========== FETCH MEALS ========== */
//   useEffect(() => {

//     const fetchMeals = async () => {
//       try {
//         const res = await fetch(
//           "https://assignment-11-server2.vercel.app/meals"
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch meals");
//         }

//         const data = await res.json();
//         setMeals(data);

//       } catch (error) {
//         console.error("Meal fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeals();

//   }, []);

//   /* ========== TOP RATED (SAFE) ========== */
//   const topRatedMeals = [...meals] // ✅ copy first
//     .sort((a, b) => b.rating - a.rating)
//     .slice(0, 6);

//   return (
//     <div>

//       <Banner />

//       <section className="max-w-7xl mx-auto px-6 py-12">

//         <h2 className="text-3xl font-bold text-center mb-10 text-primary">
//           Featured Meals
//         </h2>

//         {/* ⏳ Loading */}
//         {loading && (
//           <p className="text-center">Loading meals...</p>
//         )}

//         {/* ❌ No Data */}
//         {!loading && topRatedMeals.length === 0 && (
//           <p className="text-center text-red-500">
//             No meals found
//           </p>
//         )}

//         {/* ✅ Meals */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {topRatedMeals.map((meal) => (
//             <FoodCard key={meal._id} meal={meal} />
//           ))}
//         </div>

//         {/* ✅ Router Navigation */}
//         <div className="text-center mt-10">
//           <button
//             onClick={() => navigate("/all-meals")}
//             className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary"
//           >
//             Show All Meals
//           </button>
//         </div>

//       </section>

//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from "react";
// import Banner from "../../components/Banner";
// import FoodCard from "../../components/FoodCard";

// const Home = () => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     // Debug: check env variable
//     console.log("API URL:", import.meta.env.VITE_API_URL);

//     fetch(`${import.meta.env.VITE_API_URL}/meals`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched meals:", data);
//         setMeals(data);
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, []);

//   const topRatedMeals = meals
//     .sort((a, b) => b.rating - a.rating)
//     .slice(0, 6);

//   return (
//     <div>
//       <Banner />
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold text-center mb-10 text-primary">
//           Featured Meals
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {topRatedMeals.length > 0 ? (
//             topRatedMeals.map((meal) => <FoodCard key={meal._id} meal={meal} />)
//           ) : (
//             <p className="text-center col-span-3">No meals available.</p>
//           )}
//         </div>

//         <div className="text-center mt-10">
//           <button
//             onClick={() => (window.location.href = "/all-meals")}
//             className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary"
//           >
//             Show All Meals
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;





// import React, { useEffect, useState } from "react";
// import Banner from "../../components/Banner";
// import FoodCard from "../../components/FoodCard";

// const Home = () => {
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
//         console.error("Meal fetch error:", err);
//         setError("Failed to load meals. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeals();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading meals...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

//   const topRatedMeals = [...meals]
//     .sort((a, b) => b.rating - a.rating)
//     .slice(0, 6);

//   return (
//     <div>
//       <Banner />

//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold text-center mb-10 text-primary">
//           Featured Meals
//         </h2>

//         {topRatedMeals.length ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {topRatedMeals.map((meal) => (
//               <FoodCard key={meal._id} meal={meal} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center mt-10">No meals found.</p>
//         )}

//         <div className="text-center mt-10">
//           <button
//             onClick={() => (window.location.href = "/all-meals")}
//             className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
//           >
//             Show All Meals
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import FoodCard from '../../components/FoodCard';

const Home = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
  fetch('https://assignment-11-server2.vercel.app/meals')
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