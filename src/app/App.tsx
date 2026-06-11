import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PricingPage from "../pages/PricingPage";
import { appRoutes } from "../shared/config/site";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={appRoutes.home.path} replace />} />
        <Route path={appRoutes.home.path} element={<LandingPage />} />
        <Route path={appRoutes.pricing.path} element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
