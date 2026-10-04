function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>ShopHub</h2>
          <p>
            Discover quality products, stylish essentials,
            and everyday favorites — all in one place.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/#products">Products</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-info">
          <h3>Shop With Us</h3>
          <p>Quality Products</p>
          <p>Easy Shopping</p>
          <p>Simple & Secure</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ShopHub. All rights reserved.
        </p>

        <p>
          Designed & Developed with React
        </p>
      </div>

    </footer>
  );
}

export default Footer;