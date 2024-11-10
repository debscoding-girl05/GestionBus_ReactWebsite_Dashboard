// src/layouts/DashboardLayout.tsx
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard Home</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
