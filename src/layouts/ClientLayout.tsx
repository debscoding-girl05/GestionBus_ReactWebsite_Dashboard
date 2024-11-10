// src/layouts/ClientLayout.tsx
import { Outlet, Link } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
