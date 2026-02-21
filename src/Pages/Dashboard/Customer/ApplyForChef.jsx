



import React, { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext";

const ApplyForChef = () => {
  const { user } = useContext(AuthContext);
  const [experience, setExperience] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [loading, setLoading] = useState(false);
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  // Check if user already applied
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-11-server2.vercel.app/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.applyForChef) setAlreadyApplied(true);
      })
      .catch(err => console.error(err));
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!experience || !specialty) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://assignment-11-server2.vercel.app/users/${user._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applyForChef: true,
          chefExperience: experience,
          chefSpecialty: specialty,
        }),
      });

      const data = await res.json();
      if (data.modifiedCount) {
        toast.success("Chef application submitted successfully!");
        setAlreadyApplied(true);
      } else {
        toast.error("Failed to submit application");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p className="text-center py-10 font-bold">Please login to apply</p>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Apply to Become a Chef</h2>

      {alreadyApplied ? (
        <p className="text-green-600 font-semibold">
          You have already applied. Please wait for admin approval.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Specialty (e.g., Italian, Desserts)"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Years of Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn bg-primary text-white w-full py-2 rounded"
          >
            {loading ? "Submitting..." : "Apply"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyForChef;