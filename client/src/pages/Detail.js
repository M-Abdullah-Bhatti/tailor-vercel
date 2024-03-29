import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "../assets/css/Detail.css";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";
import SingleProductBanner from "../assets/banner-small.jpg";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="">
          {/* <div className=''>
            <img src={SingleProductBanner} alt='' className='singleProductBanner' />
          </div> */}
          <div className="singleProductContainer my-1 row">
            <div className="singleProduct col">
              <img
                className="singleProduct"
                src={`../${currentProduct.image}`}
                alt={currentProduct.name}
              />
            </div>
            <div className="col">
              <p className="singleProductTitle">{currentProduct.name}</p>

              <p
                className="singleProductText"
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "#3C6E71",
                }}
              >
                {currentProduct.description}
              </p>

              <p>
                <p className="singleProductText">
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#3C6E71",
                    }}
                  >
                    Size:{" "}
                  </span>{" "}
                  {currentProduct.size}{" "}
                </p>
                <p className="singleProductText">
                  {" "}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#3C6E71",
                    }}
                  >
                    Price:
                  </span>{" "}
                  ${currentProduct.price}{" "}
                </p>
                <p className="singleProductText">
                  {" "}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#3C6E71",
                    }}
                  >
                    Quantity:
                  </span>{" "}
                  {currentProduct.quantity}{" "}
                </p>

                <div>
                  <button
                    className="singleProductBtn singleBtn"
                    style={{ padding: "5px 15px", fontSize: "15px" }}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button
                    className="singleProductBtn"
                    disabled={!cart.find((p) => p._id === currentProduct._id)}
                    onClick={removeFromCart}
                  >
                    Remove from Cart
                  </button>
                </div>
              </p>

              {/* <img
            src={`../${currentProduct.image}`}
            alt={currentProduct.name}
          /> */}
            </div>
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
