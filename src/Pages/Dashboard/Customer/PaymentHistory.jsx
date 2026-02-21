



import { useEffect, useState, useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext";

const PaymentHistory = () => {

  const { user } = useContext(AuthContext);

  const [payments, setPayments] = useState([]);

  const [loading, setLoading] = useState(true);



  /* Fetch payment history */
  useEffect(() => {

    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/payments/user/${user.email}`)
      .then(res => res.json())
      .then(data => {

        setPayments(data);

        setLoading(false);

      })
      .catch(error => {

        console.error(error);

        toast.error("Failed to load payment history");

        setLoading(false);

      });

  }, [user]);



  /* Loading state */
  if (loading) {

    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold">
          Loading payment history...
        </p>
      </div>
    );

  }



  return (

    <div className="max-w-5xl mx-auto px-4 py-10">

      <h2 className="text-3xl font-bold mb-6">
        Payment History
      </h2>



      {

        payments.length === 0 ? (

          <p className="text-gray-500">
            No payment history found
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="table w-full border">

              <thead>

                <tr className="bg-gray-200">

                  <th>#</th>

                  <th>Order ID</th>

                  <th>Amount</th>

                  <th>Transaction ID</th>

                  <th>Date</th>

                  <th>Status</th>

                </tr>

              </thead>



              <tbody>

                {

                  payments.map((payment, index) => (

                    <tr key={payment._id}>

                      <td>{index + 1}</td>

                      <td>{payment.orderId}</td>

                      <td>${payment.amount}</td>

                      <td className="text-xs">
                        {payment.transactionId}
                      </td>

                      <td>
                        {
                          payment.date
                            ? new Date(payment.date).toLocaleString()
                            : "N/A"
                        }
                      </td>

                      <td>
                        <span className="text-green-600 font-semibold">
                          Paid ✅
                        </span>
                      </td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        )

      }



    </div>

  );

};

export default PaymentHistory;