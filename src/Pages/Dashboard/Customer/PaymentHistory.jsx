import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/payments?email=${user.email}`)
      .then(res => res.json())
      .then(data => setPayments(data));
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments yet.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Food</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Transaction ID</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p._id}>
                <td className="border p-2">{p.foodName}</td>
                <td className="border p-2">{p.price}</td>
                <td className="border p-2">{p.transactionId}</td>
                <td className="border p-2">{new Date(p.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistory;