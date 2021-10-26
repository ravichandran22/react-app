import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscribtion">
        <p className="footer-subscribtion-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscribtion-text">
          You can unsubscribe at any time.
        </p>
        <form>
          <input
            type="email"
            name="email"
            className="footer-input"
            placeholder="Enter your Email"
          ></input>
          <Button buttonStyle="btn-outline">Subscribe</Button>
        </form>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/signup">How it Works</Link>
            <Link to="/">Testimonial</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Inventors</Link>
            <Link to="/">Terms and service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/signup">How it Works</Link>
            <Link to="/">Testimonial</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Inventors</Link>
            <Link to="/">Terms and service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/signup">How it Works</Link>
            <Link to="/">Testimonial</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Inventors</Link>
            <Link to="/">Terms and service</Link>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/signup">How it Works</Link>
              <Link to="/">Testimonial</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Inventors</Link>
              <Link to="/">Terms and service</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              React <i className="fab fa-react"></i>
            </Link>
          </div>
          <div className="social-icons">
            <Link className="Social-icon-link" target="_blank" to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="Social-icon-link" target="_blank" to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="Social-icon-link" target="_blank" to="/">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="Social-icon-link" target="_blank" to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="Social-icon-link" target="_blank" to="/">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
