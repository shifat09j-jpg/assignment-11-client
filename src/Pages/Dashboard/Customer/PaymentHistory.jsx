// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../../context/AuthContext";


// const PaymentHistory = () => {
//   const { user } = useContext(AuthContext);
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     if (!user?.email) return;
//     fetch(`https://assignment-11-server2.vercel.app/payments?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => setPayments(data));
//   }, [user]);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Payment History</h2>
//       {payments.length === 0 ? (
//         <p>No payments yet.</p>
//       ) : (
//         <table className="table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border p-2">Food</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Transaction ID</th>
//               <th className="border p-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((p) => (
//               <tr key={p._id}>
//                 <td className="border p-2">{p.foodName}</td>
//                 <td className="border p-2">{p.price}</td>
//                 <td className="border p-2">{p.transactionId}</td>
//                 <td className="border p-2">{new Date(p.date).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default PaymentHistory;


import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/payments/user/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setPayments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p className="text-center py-10">Loading history...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <div className="grid gap-6">
          {payments.map(payment => (
            <div key={payment._id} className="border p-6 rounded-lg shadow">
              <p><strong>Food:</strong> {payment.foodName}</p>
              <p><strong>Amount:</strong> ৳{payment.amount}</p>
              <p><strong>Transaction ID:</strong> {payment.transactionId}</p>
              <p><strong>Date:</strong> {new Date(payment.date).toLocaleString()}</p>
              <p><strong>Status:</strong> <span className="text-green-600">Succeeded</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;