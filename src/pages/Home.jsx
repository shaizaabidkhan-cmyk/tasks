
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load products.");
      });
  }, []);

  return (
    <section className="home">

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO SHOPHUB
          </p>

          <h1>
            Discover Products
            <br />
            Made for You.
          </h1>

          <p className="hero-text">
            Explore our collection of quality products,
            stylish essentials and everyday favorites.
          </p>

          <a href="#products" className="hero-btn">
            Shop Now →
          </a>

        </div>
      </div>

      {/* Products Section */}
      <div className="products-section" id="products">

        <div className="section-heading">

          <div>
            <p className="section-label">
              OUR COLLECTION
            </p>

            <h2>
              Featured Products
            </h2>
          </div>

          <span>
            {products.length} Products
          </span>

        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Actual Products */}
        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Home;
