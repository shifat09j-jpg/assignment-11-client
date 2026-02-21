




import { useEffect, useState, useContext } from "react";

import { useSearchParams, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    if (!sessionId || !user?.email) {
      setStatus("error");
      toast.error("Invalid session or please login");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          "https://assignment-11-server2.vercel.app/verify-and-save-payment",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sessionId,
              userEmail: user.email,
            }),
          }
        );
        const data = await res.json();
        if (data.success) {
          setStatus("success");
          toast.success("Payment verified! 🎉");
        } else {
          setStatus("error");
          toast.error(data.message || "Payment verification failed");
        }
      } catch (err) {
        console.error(err);
        setStatus("error");
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId, user]);

  return (
    <div className="flex items-center justify-center h-screen text-center px-4">
      <div className="max-w-md">
        {loading ? (
          <h2 className="text-3xl font-bold text-blue-600">
            Processing your payment...
          </h2>
        ) : status === "success" ? (
          <>
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              Payment Successful! 🎉
            </h2>
            <p className="text-lg mb-6">
              Thank you for your order. Your payment has been confirmed.
            </p>
            <p className="text-gray-600 mb-4">Session ID: {sessionId}</p>
            <button
              onClick={() => navigate("/dashboard/payment-history")}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold"
            >
              View Payment History
            </button>
          </>
        ) : (
          <>
            {/* <h2 className="text-3xl font-bold text-red-600 mb-4">
              Something went wrong
            </h2>
            <p className="text-lg mb-6">
              We couldn't verify your payment. Please contact support.
            </p> */}
            <button
              onClick={() => navigate("/")}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;