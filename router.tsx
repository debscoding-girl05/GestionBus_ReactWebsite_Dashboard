import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ClientLayout from "./src/layouts/ClientLayout";
import DashboardLayout from "./src/layouts/DashboardLayout";
import Home from "./src/Pages/Client/Home";
import About from "@/Pages/Client/About";
import Contact from "@/Pages/Client/Contact";
import Reserve from "@/Pages/Client/services/Reserve";
import StepWiz from "@/components/Client/StepWizard/Steps/StepWiz";
import Courrier from "@/Pages/Client/services/Courrier";
import Colis from "@/Pages/Client/services/Colis";
import LocationBus from "@/Pages/Client/services/location";
import Profile from "@/Pages/Client/Profile";


// Wrapper component to extract className from the URL
const StepWizWithParams = () => {
  const { className } = useParams<{ className: "classique" | "VIP" | "Master" }>(); // Updated case for className
  return <StepWiz selectedClass={className || "classique"} />; // Pass className to StepWiz component
};

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/reservation" element={<Reserve />} />
        <Route path="/services/courrier" element={<Courrier />} />
        <Route path="/services/colis" element={<Colis />} />
        <Route path="/services/locationBus" element={<LocationBus />} />
        <Route path="/profile" element={<Profile />} />

        {/* Route with className parameter */}
        <Route
          path="/services/reservation/:className"
          element={<StepWizWithParams />}
        />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/Dashboard" element={<DashboardLayout> {/* Add children here */} </DashboardLayout>} />
    </Routes>
  </Router>
);

export default AppRouter;
