import './Footer.css'; 
import React, { useState } from 'react';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="footer-container">
      <ul className="footer-links">
        <li>
          <a 
            href="#contact" 
            onClick={() => toggleSection('contact')} 
            className={openSection === 'contact' ? 'active' : ''}
          >
            Contact Us
          </a>
          {openSection === 'contact' && (
<div class="footer-detail">
  <p><i class="fas fa-phone-alt"></i> Phone: 0300 0888760</p>
  <p>
    <i class="fas fa-envelope"></i> 
    Email: <a href="mailto:info@woodmark.pk">info@woodmark.pk</a>
  </p>
  <p>
    <i class="fas fa-globe"></i> 
    Website: <a href="https://woodmark.pk/" target="_blank">https://woodmark.pk</a>
  </p>
  <p>
    <i class="fas fa-map-marker-alt"></i> 
    Address: Main G.T. Rd, opposite Science School Rd, near T-junction, DHA Phase II, Islamabad
  </p>
  <p>
    <i class="fab fa-instagram"></i> 
    <a href="https://www.instagram.com/woodmarkpk/" target="_blank">Instagram</a>
  </p>
  <p>
    <i class="fab fa-linkedin"></i> 
    <a href="https://pk.linkedin.com/company/woodmark-pk" target="_blank">LinkedIn</a>
  </p>
  <p>
    <i class="fab fa-facebook"></i> 
    <a href="https://www.facebook.com/woodmark.pk?_rdc=1&_rdr#" target="_blank">Facebook</a>
  </p>
</div>

          )}
        </li>
        
        <li>
          <a 
            href="#about" 
            onClick={() => toggleSection('about')} 
            className={openSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          {openSection === 'about' && (
            <div className="footer-detail">
              <p>Wood Mark Is Doors, Kitchen, Wardrobes And Interior Work Studio Based In Islamabad, Pakistan. 
                Wood Mark Is The Symbol Of Trust, Offers The Most Qualitative, Innovative And International Standard Wood Products. 
                We Are A Trendsetter Company In The Furniture Industry By Providing Variety, Quality Services 
                And Products By Using Top Facility To Meet Up The Requirements Of Our Clients.</p>
            </div>
          )}
        </li>
        
        <li>
          <a 
            href="#shipping" 
            onClick={() => toggleSection('shipping')} 
            className={openSection === 'shipping' ? 'active' : ''}
          >
            Shipping
          </a>
          {openSection === 'shipping' && (
            <div className="footer-detail">
              <p>
                At WOOD MARK, we strive to make your shopping experience seamless and convenient. 
                Enjoy free shipping on orders over PKR 250000, with standard delivery times of 5-7 business 
                days...</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
