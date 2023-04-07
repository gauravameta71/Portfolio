import "./FooterStyle.css";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
          </div>
          <div>
            <p>Udaipur, Rajasthan</p>
            <p>India.</p>
          </div>

          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>+91 9660312254</p>
            </div>
          </div>
          <div className="mail">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
          <div>
            <p>gouravameta71@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About Me!</h4>
          <p>
            This is me Gaurav Ameta. Freelancer and MERN Stack Developer. <br />
            I enjoy building Projects on different skills and design challenges
          </p>
          <br />
          <div className="social">
            <a href="/">
              <FaFacebook
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>

            <a href="https://www.instagram.com/_gaurav.71/">
              <FaInstagram
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/gauravameta777">
              <FaLinkedin
                size={20}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
