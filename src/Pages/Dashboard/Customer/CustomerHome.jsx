

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const CustomerHome = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [loadingPayments, setLoadingPayments] = useState(true);

  // Fetch customer's orders
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadingOrders(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingOrders(false);
      });
  }, [user]);

  // Fetch customer's payment history
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/payments/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
        setLoadingPayments(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingPayments(false);
      });
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Dashboard</h2>

      <div className="mb-6">
        <p className="text-lg font-semibold">Welcome, {user?.displayName}</p>
        <p className="text-gray-600">Email: {user?.email}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold text-lg mb-2">Total Orders</h3>
          <p>{loadingOrders ? "Loading..." : orders.length}</p>
        </div>

        <div className="p-4 border rounded shadow">
          <h3 className="font-bold text-lg mb-2">Total Payments</h3>
          <p>{loadingPayments ? "Loading..." : payments.length}</p>
        </div>
      </div>

      <p className="text-gray-700">
        Use the links in the dashboard to view your orders and payment history.
      </p>
    </div>
  );
};

export default CustomerHome;
