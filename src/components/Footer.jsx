import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          
          {/* Column 1 */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="SkillBridge Logo" className="logo-image" style={{ height: '50px' }} />
            </div>
            <p className="footer-desc">
              Bridging the skill gap by connecting students, training institutes, and industries across Maharashtra for a better and skilled future.
            </p>
            <div className="social-links">
              <a href="#" className="social-btn">FB</a>
              <a href="#" className="social-btn">TW</a>
              <a href="#" className="social-btn">IN</a>
              <a href="#" className="social-btn">IG</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#portals">Portals</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Government Initiatives</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="footer-heading">Portals</h4>
            <ul className="footer-links">
              <li><a href="/student/login">Student Portal</a></li>
              <li><a href="/institute/login">Institute Portal</a></li>
              <li><a href="/employer/login">Industry Portal</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>Skill Development Dept, Mantralaya, Mumbai, Maharashtra 400032</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>+91 1800 123 4567</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>support@skillconnect.maha.gov.in</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container bottom-container">
          <p>&copy; {new Date().getFullYear()} SkillConnect Maharashtra. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
