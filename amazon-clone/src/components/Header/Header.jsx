import React from "react";
import {
  MdLocationOn,
  MdSearch,
  MdMenu,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      {/* TOP HEADER */}
      <header className={classes.header}>
        {/* LEFT */}
        <div className={classes.left}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
            className={classes.logo}
          />

          <div className={classes.location}>
            <MdLocationOn />
            <div>
              <p>Germany</p>
              <span>Update location</span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className={classes.search}>
          <select>
            <option>All</option>
          </select>
          <input placeholder="Search Amazon.de" />
          <button>
            <MdSearch size={22} />
          </button>
        </div>

        {/* RIGHT */}
        <div className={classes.right}>
          <div className={classes.lang}>
            🇺🇸 <span>EN</span>
          </div>
          <div className={classes.account}>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>

          <div className={classes.orders}>
            <p>Returns</p>
            <span>& Orders</span>
          </div>

          <div className={classes.cart}>
            <FiShoppingCart size={26} />
            <span className={classes.count}>0</span>
            <span>Shopping Basket</span>
          </div>
        </div>
      </header>

      {/* BOTTOM NAV */}
      <nav className={classes.subNav}>
        <div className={classes.menu}>
          <MdMenu size={22} />
          <span>All</span>
        </div>

        <ul>
          <li>Amazon Haul</li>
          <li>Best Sellers</li>
          <li>New Releases</li>
          <li>Amazon Basics</li>
          <li>Today's Deals</li>
          <li>Books</li>
          <li>Fashion</li>
        </ul>

        <p className={classes.promo}>Holiday-Gifts</p>
      </nav>
    </>
  );
};

export default Header;
