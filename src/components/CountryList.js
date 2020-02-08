import React from "react";
import { connect } from "react-redux";
import FlagView from "./FlagView";
import ListView from "./ListView";

const CountryList = props => {
  return props.countries && props.status !== "fetching" ? (
    <div className="countries">
      {props.countries.map(country =>
        props.viewStyle === "flag" ? (
          <FlagView key={country.name} country={country} />
        ) : (
          <ListView key={country.name} country={country} />
        )
      )}
    </div>
  ) : (
    <div>Fetching data from the server ...</div>
  );
};

const mapStateToProps = state => {
  return {
    status: state.status,
    countries: state.countries,
    viewStyle: state.viewStyle
  };
};

export default connect(mapStateToProps)(CountryList);
