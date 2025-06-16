import React from "react";
import logo from "../assets/images/image.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "100px" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "170px", height: "100px", objectFit: "contain" }}
          />
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center" style={{ gap: "24px" }}>
            {["About Us", "Features", "More Option", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="nav-link"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "rgba(14, 31, 81, 1)",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Login & Signup buttons */}
          <div
            className="d-flex align-items-center ms-4"
            style={{ gap: "16px" }}
          >
            <button
              className="btn"
              style={{
                width: "130px",
                height: "44px",
                borderRadius: "5px",
                border: "1px solid rgba(255, 62, 84, 1)",
                background: "transparent",
                color: "rgba(255, 62, 84, 1)",
                fontFamily: "Raleway",
                fontWeight: 600,
              }}
            >
              Log In
            </button>
            <button
              className="btn"
              style={{
                width: "130px",
                height: "44px",
                borderRadius: "5px",
                border: "1px solid rgba(255, 62, 84, 1)",
                background: "rgba(255, 62, 84, 1)",
                color: "#fff",
                fontFamily: "Raleway",
                fontWeight: 600,
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
