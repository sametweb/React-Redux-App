import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountry, clearCountry } from "../actions";

const Country = props => {
  const { country } = props;
  console.log(country);
  useEffect(() => {
    props.fetchCountry(props.location.state.countryName);

    return () => props.clearCountry();
  }, []);

  return (
    <div className="country">
      <div className="header">
        <div className="title">
          <h2>{country.name}</h2>
          <p>
            The capital of {country.name} is {country.capital || "none"}. The
            country resides in {country.region} region and {country.subregion}{" "}
            subregion with the population of{" "}
            {Number(country.population).toLocaleString()} people. The people of{" "}
            {country.name} is called {country.demonym}. Their currency is{" "}
            {country.currencies && country.currencies[0].name}.
          </p>
        </div>
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="info">
        <div className="box">
          <h3>Languages</h3>
          <div className="content">
            {country.languages &&
              country.languages.map(({ name }) => (
                <p key={name} className="tag">
                  {name}
                </p>
              ))}
          </div>
        </div>
        <div className="box">
          <h3>Capital</h3>
          <div className="content">{country.capital || "none"}</div>
        </div>
        <div className="box">
          <h3>Region</h3>
          <div className="content">{country.region}</div>
        </div>
        <div className="box">
          <h3>Subregion</h3>
          <div className="content">{country.subregion}</div>
        </div>
        <div className="box">
          <h3>Population</h3>
          <div className="content">
            {Number(country.population).toLocaleString()}
          </div>
        </div>
        <div className="box">
          <h3>Currency</h3>
          <div className="content">
            {country.currencies &&
              country.currencies.map(({ code, name, symbol }) => (
                <p key={code}>
                  {name && name} {code} ({symbol})
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    country: state.country
  };
};

export default connect(mapStateToProps, { fetchCountry, clearCountry })(
  Country
);
