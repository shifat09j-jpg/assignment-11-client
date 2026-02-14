import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

const MyOrders = () => {

  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);


  useEffect(() => {

    if (!user?.email) return;

    fetch(`http://localhost:3000/orders?email=${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));

  }, [user]);


  return (
    <div>

      <h2 className="text-xl font-bold mb-4">
        My Orders
      </h2>


      {
        orders.map(order => (

          <div
            key={order._id}
            className="border p-3 mb-2 rounded"
          >
            {order.foodName} - {order.status}
          </div>

        ))
      }

    </div>
  );
};

export default MyOrders;
