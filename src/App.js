import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountries } from "./actions";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CountryList from "./components/CountryList";
import Country from "./components/Country";

const App = props => {
  useEffect(() => {
    props.fetchCountries();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route path="/" exact component={CountryList} />
      <Route path="/:country" component={Country} />
    </div>
  );
};

export default connect(null, { fetchCountries })(App);
