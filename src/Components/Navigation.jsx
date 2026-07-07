import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navigation() {
  return (
    <header className="header">
      <div className="logo">
        Lokesh<span>.</span>
      </div>

      <nav className="navbar">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          contact
        </NavLink>
      </nav>

      {/* Changed from <button> to <a> so the email link actually works */}
      <a href="mailto:ayyappanlokesh3@gmail.com" className="hire-btn">
        Hire Me
      </a>
    </header>
  );
}

export default Navigation;