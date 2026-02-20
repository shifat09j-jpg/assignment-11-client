import { Navigate, useLoaderData } from "react-router";


const Order = () => {
  const meal = useLoaderData();

  const handlePayment = async () => {
    const res = await fetch("https://assignment-11-server2.vercel.app/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: meal.price,
        orderId: meal._id,
        foodName: meal.foodName || meal.food_name,
      }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else alert("Error creating checkout session");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Order: {meal.foodName || meal.food_name}</h2>
      <p>Price: ৳{meal.price}</p>

      <button
        className="bg-primary text-white px-4 py-2 rounded mt-4"
        onClick={handlePayment}
      >
        Pay Now
      </button>
  
    </div>
  );
};

export default Order;

