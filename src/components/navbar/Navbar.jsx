import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = window.location.href.endsWith(to);
  // console.log(window.location.href.endsWith(to));
  const customStyle = {
    color: isActive ? "red" : "inherit",
    // Add any other styles you want here
  };

  return (
    <NavHashLink to={to} activeClassName="selected" style={customStyle}>
      {children}
    </NavHashLink>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <CustomNavLink to="/">go to route 1</CustomNavLink>
      <CustomNavLink to="/#section1">go to section 1</CustomNavLink>
      <CustomNavLink to="/#section2">go to section 2</CustomNavLink>
      <CustomNavLink to="/route2">go to route 2</CustomNavLink>
    </div>
  );
};

export default Navbar;
