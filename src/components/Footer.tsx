import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import profile2 from "../assets/profile2.jpg"
import './components.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {/* About Section */}
          <div className="footer-section">
            {/* Logo image instead of header text */}
            <img
              src={profile2}
              alt="Good Shepherd Orphanage Logo"
              className="footer-logo"
            />

            <p className="footer-text">
              Providing hope and support to children in Jikow, South Sudan through education,
              healthcare, and daily care.
            </p>
          </div>


          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-header">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/projects" className="footer-link">Programs</Link>
              </li>
              <li>
                <Link to="/get-involved" className="footer-link">Get Involved</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-header">Contact</h3>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <Mail size={16} className="footer-icon" />
                <span> goodshepherdorphangeproject@gmail.com</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-icon" />
                <span>515-865-4539</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-icon" />
                <span>Jikow, South Sudan</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-icon" />
                <span>Des Moines, Iowa 50314, USA</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-header">Follow Us</h3>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/p/1CpW48huf5/" className="footer-social-link" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>

            {/* Added Article Section */}
            <article className="footer-article footer-article">
              <h4 className="footer-article-title">News-Article</h4>
              <Link to="https://www.desmoinesregister.com/story/news/2014/12/25/south-sudan-disappearance/20892197/" className="footer-article-link">
                Koang & Dukan History
              </Link>
            </article>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Good Shepherd Orphanage Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
