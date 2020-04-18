import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return(
      <nav className="navbar-fixed">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
          </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/products">
                Display Products
            </Link>
          </li>
          <li>
            <Link to="/products/new" className="textClass">
              Add Product
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;