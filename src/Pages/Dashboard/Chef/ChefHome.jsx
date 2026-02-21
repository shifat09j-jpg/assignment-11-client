


import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../context/AuthContext";

const ChefHome = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/meals?chefEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Chef Dashboard</h1>

      <div className="mb-6">
        <p className="text-lg font-semibold">
          Welcome, {user?.displayName} ({user?.email})
        </p>
        <p className="text-gray-600">
          Total Foods Added: {loading ? "Loading..." : foods.length}
        </p>
      </div>

      {/* <div className="grid gap-4 mb-6">
        <Link to="/dashboard/chef/add-food" className="btn bg-primary text-white p-4 rounded-lg">
          Add New Food
        </Link>
        <Link to="/dashboard/chef/my-foods" className="btn bg-secondary text-white p-4 rounded-lg">
          My Foods
        </Link>
      </div> */}

      {!loading && foods.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Foods</h2>
          <ul className="list-disc pl-6">
            {foods.map((food) => (
              <li key={food._id}>
                {food.foodName} - ৳{food.price} - Rating: {food.ratings || "N/A"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChefHome;