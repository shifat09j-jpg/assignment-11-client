


import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";

const AddFood = () => {

  const { user } = useContext(AuthContext);

  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [chefName, setChefName] = useState(user?.displayName || "");
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!foodName || !price || !imageUrl || !location || !chefName) {

      toast.error("Please fill all fields");

      return;

    }


    try {

      const newFood = {

        foodName,
        price: parseFloat(price),
        image: imageUrl,
         DeliveryArea: location,

        chefName,
        chefEmail: user?.email,
        chefId: user?.uid,

        rating,

      };


      const res = await fetch("https://assignment-11-server2.vercel.app/meals", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(newFood),

      });


      const data = await res.json();


      if (data.insertedId) {

        toast.success("🎉 Food added successfully!");


        setFoodName("");
        setPrice("");
        setImageUrl("");
        setLocation("");
        setChefName(user?.displayName || "");
        setRating(0);

      }

      else {

        toast.error("Failed to add food");

      }

    }

    catch (error) {

      console.error(error);

      toast.error("Server error");

    }

  };


  /* Star Rating UI */

  const renderStars = () => {

    const stars = [];

    for (let i = 1; i <= 5; i++) {

      stars.push(

        <span

          key={i}

          onClick={() => setRating(i)}

          className={`cursor-pointer text-2xl ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}

        >

          ★

        </span>

      );

    }

    return stars;

  };


  return (

    <div className="max-w-md mx-auto p-6">

      <Toaster position="top-right" />

      <h2 className="text-2xl font-bold mb-4">

        Add New Food

      </h2>


      <form onSubmit={handleSubmit} className="space-y-4">


        <input

          type="text"

          placeholder="Food Name"

          value={foodName}

          onChange={(e) => setFoodName(e.target.value)}

          className="w-full p-2 border rounded"

        />


        <input

          type="text"

          placeholder="Chef Name"

          value={chefName}

          onChange={(e) => setChefName(e.target.value)}

          className="w-full p-2 border rounded"

        />


        <input

          type="number"

          placeholder="Price"

          value={price}

          onChange={(e) => setPrice(e.target.value)}

          className="w-full p-2 border rounded"

        />


        <input

          type="text"

          placeholder="Image URL"

          value={imageUrl}

          onChange={(e) => setImageUrl(e.target.value)}

          className="w-full p-2 border rounded"

        />


        <input

          type="text"

          placeholder="Location"

          value={location}

          onChange={(e) => setLocation(e.target.value)}

          className="w-full p-2 border rounded"

        />


        <div className="flex items-center gap-2">

          <span className="font-semibold">

            Rating:

          </span>

          {renderStars()}

        </div>


        <button

          type="submit"

          className="bg-primary text-white w-full py-2 rounded"

        >

          Add Food

        </button>


        <button

          type="button"

          onClick={() => navigate("/")}

          className="bg-gray-600 text-white w-full py-2 rounded"

        >

          Back to Home

        </button>


      </form>

    </div>

  );

};

export default AddFood;