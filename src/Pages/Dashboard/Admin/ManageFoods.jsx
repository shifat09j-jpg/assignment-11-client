
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all foods from backend
  const fetchFoods = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://assignment-11-server2.vercel.app/meals");
      const data = await res.json();
      setFoods(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch foods");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Delete food
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this food?")) return;

    try {
      const res = await fetch(`https://assignment-11-server2.vercel.app/meals/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount === 1) {
        toast.success("Food deleted successfully!");
        setFoods((prev) => prev.filter((food) => food._id !== id));
      } else {
        toast.error("Failed to delete food");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  if (loading) return <p className="text-center py-10">Loading foods...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Foods</h2>

      {foods.length === 0 ? (
        <p>No foods found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th>#</th>
                <th>Food Name</th>
                <th>Chef Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Ratings</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {foods.map((food, index) => (
                <tr key={food._id}>
                  <td>{index + 1}</td>
                  <td>{food.foodName}</td>
                  <td>{food.chefName || "N/A"}</td>
                  <td>৳{food.price}</td>
                  <td>
                    {food.image ? (
                      <img src={food.image} alt={food.foodName} className="w-16 h-16 object-cover rounded" />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{food.ratings || "N/A"}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageFoods;