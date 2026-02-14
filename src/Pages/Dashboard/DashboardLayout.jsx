// src/pages/Dashboard/DashboardLayout.jsx
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="p-6 text-center font-bold">Please login to access the dashboard.</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="mb-4">
          <p className="font-bold">{user.displayName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-xs mt-1 font-medium text-primary">Role: {user.role}</p>
        </div>

        <ul className="space-y-2">
          {/* Admin Links */}
          {user.role === "admin" && (
            <>
              <li><Link className="text-primary font-bold" to="/dashboard/admin">Admin Home</Link></li>
              <li><Link className="text-primary font-bold" to="/dashboard/admin/manage-users">Manage Users</Link></li>
              <li><Link className="text-primary font-bold" to="/dashboard/admin/manage-foods">Manage Foods</Link></li>
            </>
          )}

          {/* Chef Links */}
          {user.role === "chef" && (
            <>
              <li><Link className="text-primary font-bold" to="/dashboard/chef">Chef Home</Link></li>
              <li><Link className="text-primary font-bold" to="/dashboard/chef/add-food">Add Food</Link></li>
              <li><Link className="text-primary font-bold" to="/dashboard/chef/my-foods">My Foods</Link></li>
            </>
          )}

          {/* Customer Links */}
          {user.role === "customer" && (
            <>
              <li><Link className="text-primary font-bold" to="/dashboard/customer">Customer Home</Link></li>
              <li><Link className="text-primary font-bold" to="/dashboard/customer/my-orders">My Orders</Link></li>
              <li><Link className="text-primary font-bold" to="/dashboard/customer/payment-history">Payment History</Link></li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
