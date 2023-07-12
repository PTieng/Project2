import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import phone from "../image/frame_21.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="group-1 d-flex">
            <nav className="navbar">
              <ul className="list-unstyled d-flex">
                <li className="nav-item active">
                  <Link to="/" className="text-decoration-none">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/event" className="text-decoration-none">
                    Sự kiện
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="text-decoration-none">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="group-2 d-flex">
              <img src={phone} alt="" />
              <p className="g2-phone">0123465798</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
