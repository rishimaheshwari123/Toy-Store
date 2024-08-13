import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useSelector } from "react-redux";
const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <div>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">Toy Store</span>
            </div>
            <div className="media-icons">
              <Link
                to="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaFacebook className="fab" />
              </Link>
              <Link
                to="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTwitter className="fab" />
              </Link>
              <Link
                to="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaInstagram className="fab" />
              </Link>
              <Link
                to="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaLinkedin className="fab" />
              </Link>
              <Link
                to="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaYoutube className="fab" />
              </Link>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Get started</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <Link to="#">Toys</Link>
              </li>
              <li>
                <Link to="#">Characters</Link>
              </li>
              <li>
                <Link to="#">Kids Toy</Link>
              </li>
              <li>
                <Link to="#">Brands</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                {token ? (
                  <Link to="/admin/dashboard">Admin Login</Link>
                ) : (
                  <Link to="/login">Admin Login</Link>
                )}
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Info</li>
              <li>
                <Link to="#">
                  A-8, Phase 1, Tilak Nagar, Bawadiya Kalan, Gulmohar Colony
                  Bhopal Madhya Pradesh 462026
                </Link>
              </li>
              <li>
                <Link to="#">9300648212</Link>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2024 <a href="#"></a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
