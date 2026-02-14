
// import { useParams } from "react-router";
// import CheckoutForm from "../../components/CheckoutForm";
// // import CheckoutForm from "./CheckOutForm";


// const Payment = () => {
//   const { id } = useParams();

//   return (
//     <div className="max-w-xl mx-auto mt-20">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Complete Payment
//       </h2>

//       <CheckoutForm orderId={id} />
//     </div>
//   );
// };

// export default Payment;



import { useEffect, useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const Payment = () => {
  const { id } = useParams(); // Order ID
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // Fetch order details from backend
  useEffect(() => {
    fetch(`http://localhost:3000/orders/${id}`)
      .then(res => res.json())
      .then(data => setOrder(data));
  }, [id]);

  // Create PaymentIntent
  useEffect(() => {
    if (!order) return;
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: order.price }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [order]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    if (error) {
      toast.error(error.message);
    } else if (paymentIntent.status === "succeeded") {
      toast.success("Payment Successful! 🎉");

      // Update order in backend with paid=true and transactionId
      fetch(`http://localhost:3000/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paid: true,
          transactionId: paymentIntent.id,
        }),
      })
        .then(res => res.json())
        .then(() => navigate("/dashboard/payment-history"));
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Pay for {order?.foodName}</h2>
      <p>Price: ৳{order?.price}</p>
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

