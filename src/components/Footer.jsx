import "../styles/Footer.css"
import Button from "./Button";
import Input from "./Input";


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
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
           <p>Subscribe for exclusive deals</p>
           <Input></Input>
          <Button variant="primary">Subscribe</Button>
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
