import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import TrackOrder from "./pages/TrackOrder";
import Reviews from "./pages/Reviews";
function HomePage() {

  return (

    <div className="bg-[#0f0a07] min-h-screen text-white overflow-x-hidden">

      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />

    </div>

  );
}

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
<Route path="/track-order/:orderNumber" element={<TrackOrder />} />
<Route
  path="/login"
  element={<Login />}
/>
<Route path="/reviews" element={<Reviews />} />

    </Routes>

  );
}

export default App;
