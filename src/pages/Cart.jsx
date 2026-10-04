import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <div className="empty-icon">🛒</div>

        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any products to your cart yet.
        </p>

        <Link to="/" className="shop-btn">
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-header">
        <p className="section-label">SHOPPING BAG</p>
        <h1>Your Cart</h1>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-item-info">
                <h3>{item.title}</h3>

                <p>${item.price}</p>

                <div className="quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-right">
                <strong>
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </strong>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;