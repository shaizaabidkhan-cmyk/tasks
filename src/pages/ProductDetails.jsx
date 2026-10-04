
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load this product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-box">
          <div className="loader"></div>
          <h2>Loading Product</h2>
          <p>Please wait...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <div className="error-box">
          <div className="error-icon">!</div>
          <h2>Product Not Found</h2>
          <p>{error}</p>

          <Link to="/" className="retry-btn">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="details-page">
      <Link to="/" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-card">
        <div className="details-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="details-info">
          <span className="category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="details-rating">
            ⭐ {product.rating}
            <span> | {product.stock} in stock</span>
          </div>

          <h2 className="details-price">
            ${product.price}
          </h2>

          <p className="description">
            {product.description}
          </p>

          <div className="product-meta">
            <div>
              <strong>Brand</strong>
              <span>{product.brand || "Premium"}</span>
            </div>

            <div>
              <strong>Availability</strong>
              <span>{product.availabilityStatus}</span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="details-add-btn"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;