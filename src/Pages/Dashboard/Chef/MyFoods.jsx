



import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const MyFoods = () => {
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

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">My Foods</h2>
      {foods.length === 0 ? (
        <p>No foods added yet.</p>
      ) : (
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>#</th>
              <th>Food</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>{food.foodName}</td>
                <td>৳{food.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyFoods;