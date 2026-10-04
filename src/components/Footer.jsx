
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Shop<span>Hub</span>
          </h2>
          <p>
            Your simple and reliable place to discover quality products
            at great prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>support@shophub.com</p>
          <p>+92 300 1234567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;