


import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load orders");
        setLoading(false);
      });
  }, [user]);

 
  const handlePay = async (order) => {
  try {
    const res = await fetch(
      "https://assignment-11-server2.vercel.app/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          foodName: order.foodName,
          price: order.price,
          orderId: order._id,
        }),
      }
    );

    const data = await res.json();

    if (data?.url) {
     
      window.location.assign(data.url);
    } else {
      toast.error("Stripe session failed");
    }
  } catch (err) {
    console.error(err);
    toast.error("Payment error");
  }
};

  if (loading) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th>#</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.foodName}</td>
                  <td>৳{order.price}</td>
                  <td>
                    {order.status === "paid" ? (
                      <span className="text-green-600 font-semibold">Paid ✅</span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">Pending ⏳</span>
                    )}
                  </td>
                  <td>
                    {order.status !== "paid" && (
                      <button
                        onClick={() => handlePay(order)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                      >
                        Pay
                      </button>
                    )}
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

export default MyOrders;