import "../styles/Footer.css"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-blocks">
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="support">
            <ul>
              <li>Support</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="legal">
            <ul>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="newsletter">
            <ul>
              <li>Newsletter</li>
              <li>Subscribe for exclusive deals</li>

            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
