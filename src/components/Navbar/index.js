import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authAction";
import "./style.css";

function Navbar(props) {
  function toggleNav() {
    animateSlider();
    const burgerButton = document.getElementById("burger");
    burgerButton.classList.toggle("is-active");
  }

  function animateSlider() {
    const slider = document.getElementsByClassName("slider")[0];
    document.getElementById("root").style.overflow = "hidden";
    slider.classList.toggle("active");

    const list = document.getElementsByClassName("list")[0];
    list.childNodes.forEach((e, index) => {
      if (e.style.animation) e.style.animation = "";
      else
        e.style.animation = `listItemFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
    });
  }

  return (
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0">Cover</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <Link
            class="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            to="/stocks"
          >
            Home
          </Link>
          <Link class="nav-link fw-bold py-1 px-0" to="/pricing">
            Pricing
          </Link>
          <Link class="nav-link fw-bold py-1 px-0" to="/faq">
            FAQ
          </Link>
          <Link class="nav-link fw-bold py-1 px-0" to="/login">
            Login
          </Link>
          <Link class="nav-link fw-bold py-1 px-0" to="/register">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
