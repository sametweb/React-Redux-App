import React, { useState } from "react";
import { connect } from "react-redux";
import { switchViewStyle } from "../actions";

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
      <form>
        <input
          placeholder="search countries by name"
          id="search"
          type="text"
          name="search"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>
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

export default connect(mapStateToProps, { switchViewStyle })(Navigation);
