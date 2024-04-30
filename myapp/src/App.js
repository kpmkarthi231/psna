import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import NewPage from "./NewPage";
import Profile from "./Profile";
import SuccessPage from "./SuccessPage";
import MyOrders from "./MyOrders";
import Address from "./Address";

const Stack = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/newpage" element={<NewPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/successpage" element={<SuccessPage />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/Address" element={<Address />} />
    </Routes>
  );
};

const Header = () => {
  const img = require("../src/image/psna1.png");
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={img} alt="PSNA" style={styles.logo} />
      </div>
      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink
              to="/"
              style={styles.navLink}
              activeStyle={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              style={styles.navLink}
              activeStyle={styles.activeLink}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              style={styles.navLink}
              activeStyle={styles.activeLink}
            >
              Placements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Address"
              style={styles.navLink}
              activeStyle={styles.activeLink}
            >
              Address
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/successpage"
              style={styles.navLink}
              activeStyle={styles.activeLink}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myorders"
              style={styles.navLink}
              activeStyle={styles.activeLink}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <NewPage />
    </footer>
  );
};

const HomePage = () => {
  return (
    <Router>
      <div>
        <Header />
        <Stack />
        <Footer />
      </div>
    </Router>
  );
};
const styles = {
  header: {
    // backgroundColor: "#fff",
    padding: "20px 0",
    borderBottom: "2px solid ",
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
  logo: {
    height: "80px",
    width: "auto",
  },
  navList: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navLink: {
    color: "black",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#555",
  },
};
export default HomePage;
