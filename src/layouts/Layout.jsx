import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./layout.scss";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
