



import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://assignment-11-server2.vercel.app/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Approve chef application
  const approveChef = async (userId) => {
    try {
      const res = await fetch(`https://assignment-11-server2.vercel.app/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "chef", applyForChef: false }),
      });
      const data = await res.json();
      if (data.modifiedCount) {
        toast.success("User approved as Chef");
        fetchUsers();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to approve chef");
    }
  };

  // Reject chef application
  const rejectChef = async (userId) => {
    try {
      const res = await fetch(`https://assignment-11-server2.vercel.app/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applyForChef: false }),
      });
      const data = await res.json();
      if (data.modifiedCount) {
        toast.success("Chef application rejected");
        fetchUsers();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to reject chef");
    }
  };

  // Chef applications
  const chefRequests = users.filter(u => u.applyForChef === true);

  if (loading) return <p className="text-center py-10">Loading users...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      {/* Chef Applications Section */}
      {chefRequests.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Chef Applications</h3>
          <div className="overflow-x-auto">
            <table className="table w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {chefRequests.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.displayName || user.name}</td>
                    <td>{user.email}</td>
                    <td className="space-x-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => approveChef(user._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => rejectChef(user._id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* All Users */}
      <h3 className="text-xl font-semibold mb-2">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Applied for Chef</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.displayName || user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.applyForChef ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;