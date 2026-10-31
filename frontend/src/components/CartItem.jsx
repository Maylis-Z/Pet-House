
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQty,
  removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-icon">🐾</div>

        <div>
          <h3>{item.name}</h3>
          <p className="cart-item-price">
            {Number(item.price).toLocaleString("fr-DZ")} DA
          </p>
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-control">
          <button
            onClick={() => dispatch(decreaseQty(item.id))}
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span>{item.qty}</span>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                })
              )
            }
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <strong>
          {(item.price * item.qty).toLocaleString("fr-DZ")} DA
        </strong>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
