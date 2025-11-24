import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import profile2 from "../assets/profile2.jpg"
import './components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">

          {/* About Section */}
          <div className="footer-section">
            <img 
              src={profile2} 
              alt="Good Shepherd Orphanage Logo" 
              className="footer-logo" 
            />

            <p className="footer-text">
              Providing hope and support to children in Jikow, South Sudan through
              education, healthcare, and daily care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-header">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">Programs</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li>
                <Link to="/get-involved" className="footer-link">Donate</Link>
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
                <span>+1 (515)-865-4539</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-icon" />
                <span>Jikow, South Sudan</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-icon" />
                <span>4110 S.W Street, Des Moines, Iowa 50314, USA</span>
              </li>
            </ul>
          </div>

          {/* Social + Article */}
          <div className="footer-section">

            <h3 className="footer-header">Follow Us</h3>
            <div className="footer-social">
              <a 
                href="https://www.facebook.com/share/p/1CpW48huf5/" 
                className="footer-social-link" 
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>

              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>

            {/* News Article */}
            <article className="footer-article">
              <h4 className="footer-article-title">News-Article</h4>

              <Link 
                to="https://www.desmoinesregister.com/story/news/2014/12/25/south-sudan-disappearance/20892197/" 
                className="footer-article-link"
              >
                Koang & Dukan History
              </Link>
            </article>
          </div>
        </div>

         {/* Added Paragraph Below Article */}
            <p className="footer-legal">
              Good Sheperd Orphanage Project, Inc is a 501(c)(3) nonprofit organization. 
              Tax-Deductible: ID: 46-0746809
            </p>

        <div className="footer-bottom">
          <p><strong>
            &copy; {new Date().getFullYear()} Good Shepherd Orphanage Project,Inc</strong>. 
            <strong> All rights reserved.</strong> Designed By GMTS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
