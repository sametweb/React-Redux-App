import React, { useEffect } from "react";
import { connect } from "react-redux";
import { switchDarkMode } from "../actions";
import { Link } from "react-router-dom";

const Header = props => {
  useEffect(() => {
    props.darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [props.darkMode]);

  return (
    <header>
      <Link to="/">
        <h1 className="logo">COUNTRY FACTS 💯</h1>
      </Link>

      <button
        className="switch"
        onClick={() => props.switchDarkMode(!props.darkMode)}
      >
        Dark Mode
        {props.darkMode ? (
          <i className="fa fa-toggle-on"></i>
        ) : (
          <i className="fa fa-toggle-off"></i>
        )}
      </button>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps, { switchDarkMode })(Header);
