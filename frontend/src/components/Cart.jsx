
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

function Cart({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + (Number(item.qty) || 0),
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * (Number(item.qty) || 0),
    0
  );

  const formatPrice = (price) =>
    `${price.toLocaleString("fr-DZ")} DA`;

  if (!isOpen) return null;

  return (
    <div className="mini-cart-backdrop" onClick={onClose}>
      <div
        className="mini-cart"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mini-cart-header">
          <div>
            <h3>Your Cart 🐾</h3>
            <p>{totalItems} items in your bag</p>
          </div>

          <button
            className="mini-cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="mini-cart-empty">
            <span>🛒</span>
            <h4>Your cart is empty!</h4>
            <p>Let's find something for your little friends.</p>

            <button onClick={onClose}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="mini-cart-items">
              {cartItems.map((item) => (
                <div className="mini-cart-item" key={item.id}>
                  <div className="mini-cart-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      "🐾"
                    )}
                  </div>

                  <div className="mini-cart-info">
                    <h4>{item.name}</h4>

                    <p>{formatPrice(Number(item.price))}</p>

                    <div className="mini-cart-quantity">
                      <button
                        onClick={() =>
                          dispatch(decreaseQty(item.id))
                        }
                      >
                        −
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() =>
                          dispatch(addToCart(item))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mini-cart-item-end">
                    <strong>
                      {formatPrice(
                        Number(item.price) * Number(item.qty)
                      )}
                    </strong>

                    <button
                      className="mini-cart-remove"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mini-cart-footer">
              <button
                className="mini-cart-clear"
                onClick={() => dispatch(clearCart())}
              >
                Clear cart
              </button>

              <div className="mini-cart-total">
                <span>Subtotal</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>

              <button
                className="mini-cart-continue"
                onClick={onClose}
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
