import "../styles/Footer.css"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-blocks">
          <div className="about">
            <ul>
              <li>About</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="support">
            <ul>
              <li>About</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="legal">
            <ul>
              <li>About</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="newsletter">
            <ul>
              <li>About</li>
              <li>About Us</li>
              <input placeholder="Email"></input>
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
