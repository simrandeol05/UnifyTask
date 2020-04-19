import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return(
      <nav className="navbar-fixed teal lighten-2">
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
          <li>
            <Link to="/products/edit" className="textClass">
              Edit Product
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;