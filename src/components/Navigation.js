import React, { useState } from "react";
import { connect } from "react-redux";
import { switchViewStyle, searchCountry } from "../actions";
import { withRouter } from "react-router-dom";
import slugify from "react-slugify";

const Navigation = props => {
  const [term, setTerm] = useState("");

  return (
    <div className="navigation">
      <button
        className="switch"
        onClick={() =>
          props.switchViewStyle(props.viewStyle === "flag" ? "list" : "flag")
        }
      >
        {props.viewStyle === "flag" ? (
          <>
            <i className="fa fa-th-list"></i> List View
          </>
        ) : (
          <>
            <i className="fa fa-th"></i> Flag View
          </>
        )}
      </button>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.history.push(`/search/${slugify(term)}`);
          setTerm("");
        }}
      >
        <input
          placeholder="search countries by name"
          id="search"
          type="text"
          name="search"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    viewStyle: state.viewStyle
  };
};

export default connect(mapStateToProps, { switchViewStyle, searchCountry })(
  withRouter(Navigation)
);
