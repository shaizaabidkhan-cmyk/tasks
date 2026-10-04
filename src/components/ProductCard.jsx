
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="product-bottom">
          <span className="price">
            ${product.price}
          </span>
        </div>

        <div className="card-buttons">

          <Link
            to={`/product/${product.id}`}
            className="details-btn"
          >
            View Details
          </Link>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;
