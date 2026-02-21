


import { useEffect, useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";


const Payment = () => {
  const { id } = useParams(); 
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 

  const [order, setOrder] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  
  useEffect(() => {
    if (!user?.email) return; 

    fetch(`https://assignment-11-server2.vercel.app/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.error(err));
  }, [id, user]);

  useEffect(() => {
    if (!order) return;
    fetch("https://assignment-11-server2.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: order.price, email: user?.email }),
    }) 
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error(err));
  }, [order, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      toast.success("Payment Successful! 🎉");

      await fetch(`https://assignment-11-server2.vercel.app/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paid: true,
          transactionId: paymentIntent.id,
        }),
      });

      navigate(`/payment-success?session_id=${paymentIntent.id}`);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading user...</p>; // 🔹 wait for user

  if (!order) return <p className="text-center mt-10">Loading order...</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Pay for {order.foodName}</h2>
      <p>Price: ৳{order.price}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement className="p-2 border rounded" />
        <button
          className="btn bg-primary text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Payment;