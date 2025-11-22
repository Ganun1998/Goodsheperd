import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import '@fortawesome/fontawesome-free/css/all.min.css';
import profile1 from "../assets/profile1.png"
import './components.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { pathname } = useLocation(); // destructure pathname

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" },
  ];

  // Added type annotation for path
  const isActive = (path: string): boolean => pathname === path;

  return (
    <>
      {/* Contact Bar */}
      <div className="contact-bar">
        <div className="container">
          <div className="flex-container">
            <div className="contact-info">
              <span><i className="fas fa-envelope"></i> goodshepherdorphangeproject@gmail.com</span>
              <span><i className="fas fa-phone-alt"></i> +1 (515)-865-4539</span>
            </div>
            <Link to="/donate">
              <Button className="infos-button">Donate Now</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              {/* Logo Image */}
              <img
                src={profile1}
                alt="Good Shepherd Logo"
              />
              {/* Logo Text */}
              <span className="span">Good Shepherd Orphanage Project,Inc</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>

              {/* About Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className="dropdown-button">
                  About Us
                  <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAboutOpen && (
                  <div className="dropdown-menu">
                    <Link to="/about" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>About Us</Link>
                    <Link to="/about/our-videos" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>Our Videos</Link>
                    <Link to="/about/our-founders" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>Our Founders</Link>
                    <Link to="/about/our-history" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>Our History</Link>
                    <Link to="/about/core-values" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>Core Values</Link>
                    <Link to="/about/our-leadership" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>Our Leaders</Link>
                    <Link to="/about/our-partners" className="dropdown-item" onClick={() => setIsAboutOpen(false)}>Our Partners</Link>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button className="dropdown-button">
                  Programs
                  <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProgramsOpen && (
                  <div className="dropdown-menu">
                    <Link to="/programs/daily-feeding" className="dropdown-item" onClick={() => setIsProgramsOpen(false)}>Daily Feeding</Link>
                    <Link to="/programs/primary-education" className="dropdown-item" onClick={() => setIsProgramsOpen(false)}>Primary Education</Link>
                    <Link to="/programs/medical-clinic" className="dropdown-item" onClick={() => setIsProgramsOpen(false)}>Medical Clinic</Link>
                    <Link to="/programs/building-construction" className="dropdown-item" onClick={() => setIsProgramsOpen(false)}>Building Construction</Link>
                    <Link to="/programs/water-well" className="dropdown-item" onClick={() => setIsProgramsOpen(false)}>Water Well Drilling</Link>
                    <Link to="/programs/clothing-donations" className="dropdown-item" onClick={() => setIsProgramsOpen(false)}>Clothing Donations</Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Desktop Donate Button */}
              <Link to="/donate">
                <Button className="navbar-button">Donate</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="mobile-nav">
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Programs */}
              <div className="mobile-dropdown">
                <div className="dropdown-title" onClick={() => setIsProgramsOpen(!isProgramsOpen)}>
                  Programs
                </div>
                {isProgramsOpen && (
                  <div className="mobile-dropdown-menu">
                    <Link to="/programs/daily-feeding" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Daily Feeding</Link>
                    <Link to="/programs/primary-education" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Primary Education</Link>
                    <Link to="/programs/medical-clinic" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Medical Clinic</Link>
                    <Link to="/programs/building-construction" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Building Construction</Link>
                    <Link to="/programs/water-well" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Water Well Drilling</Link>
                    <Link to="/programs/clothing-donations" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Clothing Donations</Link>
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <div className="mobile-dropdown">
                <div className="dropdown-title" onClick={() => setIsAboutOpen(!isAboutOpen)}>
                  About Us
                </div>
                {isAboutOpen && (
                  <div className="mobile-dropdown-menu">
                    <Link to="/about" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/about/our-videos" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Our Videos</Link>
                    <Link to="/about/our-founders" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Our Founders</Link>
                    <Link to="/about/our-history" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Our History</Link>
                    <Link to="/about/core-values" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Core Values</Link>
                    <Link to="/about/our-leadership" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Our Leaders</Link>
                    <Link to="/about/our-partners" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Our Partners</Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Donate Button */}
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button className="full-width">
                  Donate Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
