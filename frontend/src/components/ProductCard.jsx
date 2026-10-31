
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const placeholders = { dog: "🐶", cat: "🐱", bird: "🐦" };

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [imgFailed, setImgFailed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!showMessage) return;

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowMessage(true);
  };

  return (
    <article className="card">
      <div className="card-img">
        <span className="badge">{product.type}</span>

        {imgFailed ? (
          <span className="card-placeholder">
            {placeholders[product.animal] || "🐾"}
          </span>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>

        <div className="card-footer">
          <span className="price">
            {product.price.toLocaleString()} DA
          </span>

          <button className="add-btn" onClick={handleAddToCart}>
            Add +
          </button>
        </div>

        {showMessage && (
          <p className="added-message">
            ✓ Added to cart!
          </p>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
