// import { useContext } from "react";


// import { AuthContext } from "../../context/AuthContext";
// import { toast } from "react-toastify";

// const AddFood = () => {
//   const { user } = useContext(AuthContext);

//   const handleAddFood = (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const newReview = {
//       food_name: form.food_name.value,
//       photo: form.photo.value,
//       restaurant_name: form.restaurant_name.value,
//       restaurant_location: form.location.value,
//       rating: Number(form.rating.value),
//       review_text: form.review_text.value,
//       reviewer_email: user?.email,
//     //   date: new Date()
//     };

   

    
//     fetch('https://foodfan-server.vercel.app/meals', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newReview)
//     })
//     .then(res => res.json())
//     .then(data=> {
//       toast.success("Successfully added!")
//       console.log(data)
//       form.reset();
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-12 ">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         🍽 Add Food Review
//       </h2>

//       <form onSubmit={handleAddFood} className="bg-white shadow-lg rounded-xl p-8 space-y-5">

//         {/* Food Name */}
//         <div>
//           <label className="font-medium">Food Name</label>
//           <input
//             type="text"
//             name="food_name"
//             required
//             className="w-full mt-2 p-3 border rounded-lg"
//             placeholder="Items Name"
//           />
//         </div>

//         {/* Food Image */}
//         <div>
//           <label className="font-medium">Food Image URL</label>
//           <input
//             type="url"
//             name="photo"
//             required
//             className="w-full mt-2 p-3 border rounded-lg"
//             placeholder="https://image-link.jpg"
//           />
//         </div>

//         {/* Restaurant Name */}
//         <div>
//           <label className="font-medium">Restaurant Name</label>
//           <input
//             type="text"
//             name="restaurant_name"
//             required
//             className="w-full mt-2 p-3 border rounded-lg"
//             placeholder="Restaurant Name"
//           />
//         </div>

//         {/* Location */}
//         <div>
//           <label className="font-medium">Location</label>
//           <input
//             type="text"
//             name="location"
//             required
//             className="w-full mt-2 p-3 border rounded-lg"
//             placeholder="Gulistan, Dhaka"
//           />
//         </div>

//         {/* Rating */}
//         <div>
//           <label className="font-medium">Star Rating</label>
//           <select
//             name="rating"
//             required
//             className="w-full mt-2 p-3 border rounded-lg"
//           >
//             <option value="">Select Rating</option>
//             <option value="5">★★★★★ (5)</option>
//             <option value="4.5">★★★★☆ (4.5)</option>
//             <option value="4">★★★★ (4)</option>
//             <option value="3.5">★★★☆ (3.5)</option>
//             <option value="3">★★★ (3)</option>
//           </select>
//         </div>

//         {/* Review Text */}
//         <div>
//           <label className="font-medium">Review</label>
//           <textarea
//             name="review_text"
//             rows="4"
//             required
//             className="w-full mt-2 p-3 border rounded-lg"
//             placeholder="Write your honest review..."
//           ></textarea>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//         >
//           Add Review
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddFood;



import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


const AddFood = () => {

  const { user } = useContext(AuthContext);

  const handleAdd = e => {

    e.preventDefault();

    const form = e.target;

    const food = {
      name: form.name.value,
      price: form.price.value,
      image: form.image.value,
      chef: user.email
    };


    fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(food)
    });

    alert("Food Added ✅");
    form.reset();
  };


  return (
    <div>

      <h2 className="text-xl font-bold mb-4">
        Add Food
      </h2>


      <form onSubmit={handleAdd} className="space-y-3">

        <input
          name="name"
          placeholder="Food Name"
          className="input input-bordered w-full"
        />

        <input
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
        />

        <input
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        <button className="btn btn-success">
          Add
        </button>

      </form>

    </div>
  );
};

export default AddFood;

