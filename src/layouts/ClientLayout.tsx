// src/layouts/ClientLayout.tsx
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "@/components/Client/NavBar/NavBar";

const ClientLayout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
