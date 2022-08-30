import React from "react";
import { useNavigate } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { FaRulerVertical } from "react-icons/fa";

import "./style.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
  const navigate = useNavigate();
  const { _id, name, description, image, price, quantity, size } = item;
  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <>
      <div className="col columnStyle">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <div class="image-container">
                  <div class="first">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="discount">-25%</span>
                      <span class="wishlist">
                        <i class="fa fa-heart-o"></i>
                      </span>
                    </div>
                  </div>

                  <img
                    alt={name}
                    src={image}
                    class="img-fluid rounded thumbnail-image"
                  />
                </div>

                <div class="product-detail-container p-2">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="dress-name">{name}</h5>

                    <div class="d-flex flex-column mb-2">
                      <span class="new-price">
                        ${Math.round(price - price * 0.25)}
                      </span>
                      <small class="old-price text-right">${price}</small>
                    </div>
                  </div>
                  <small class="prod-desc">{description}</small>
                  <div className="prod-stock">
                    {quantity} {pluralize("item", quantity)} in stock
                  </div>

                  <div class="d-flex justify-content-between align-items-center pt-1">
                    <div>
                      <FaRulerVertical
                        style={{ fontSize: "1rem", color: "#284B63" }}
                      />

                      <small class="prod-desc">{size}</small>
                    </div>
                    <button
                      className="but-btn"
                      onClick={() => navigate(`/products/${_id}`)}
                    >
                      <span class="buy">BUY +</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
