import React, { useContext, useMemo } from "react";
import LayOut from "../../components/layOut/LayOut";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/products/productsCard/ProductCard";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { type } from "../../Utility/actionType";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const { totalItems, totalPrice } = useMemo(() => {
    return basket.reduce(
      (acc, item) => {
        acc.totalItems += item.amount;
        acc.totalPrice += item.price * item.amount;
        return acc;
      },
      { totalItems: 0, totalPrice: 0 }
    );
  }, [basket]);

  const increment = (product) => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: product,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <div className={styles.cart}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2>
            <ShoppingCartIcon /> Shopping Cart
          </h2>

          {basket.length === 0 ? (
            <div className={styles.empty}>
              <p>Your Amazon Cart is empty.</p>
              <Link to="/" className={styles.shopBtn}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            basket.map((product) => (
              <div key={product.id} className={styles.item}>
                <ProductCard
                  product={product}
                  flex
                  readDescription={false}
                  renderAdd={false}
                />

                <div className={styles.controls}>
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => decrement(product.id)}
                  >
                    {product.amount === 1 ? (
                      <DeleteIcon />
                    ) : (
                      <RemoveIcon />
                    )}
                  </button>

                  <span>{product.amount}</span>

                  <button
                    aria-label="Increase quantity"
                    onClick={() => increment(product)}
                  >
                    <AddIcon />
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  $
                  {numeral(product.price * product.amount).format("0,0.00")}
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.summary}>
            <p>
              Subtotal ({totalItems} items):
              <strong>
                {" "}
                ${numeral(totalPrice).format("0,0.00")}
              </strong>
            </p>

            <label className={styles.gift}>
              <input type="checkbox" />
              This order contains a gift
            </label>

            <Link
              to={basket.length === 0 ? "#" : "/payment"}
              className={`${styles.checkout} ${
                basket.length === 0 && styles.disabled
              }`}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default Cart;
