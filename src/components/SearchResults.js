import React, { useEffect } from "react";
import { connect } from "react-redux";
import { switchViewStyle, searchCountry } from "../actions";
import FlagView from "../components/FlagView";
import ListView from "../components/ListView";

const SearchResults = props => {
  useEffect(() => {
    props.searchCountry(props.match.params.search);
  }, [props.match.params.search]);

  return (
    <div className="search-results">
      <h2>Search results for "{props.match.params.search}"</h2>
      {props.searchResults && props.status !== "fetching" ? (
        <div className="countries">
          {props.searchResults.map(country =>
            props.viewStyle === "flag" ? (
              <FlagView key={country.name} country={country} />
            ) : (
              <ListView key={country.name} country={country} />
            )
          )}
        </div>
      ) : (
        <div>Fetching data from the server ...</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    viewStyle: state.viewStyle,
    searchResults: state.searchResults
  };
};

export default connect(mapStateToProps, { switchViewStyle, searchCountry })(
  SearchResults
);
