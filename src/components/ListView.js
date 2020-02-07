import React from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

const Flagview = ({ country }) => {
  return (
    <div className="country list">
      <Link
        to={{
          pathname: `/${slugify(country.name)}`,
          state: { countryName: country.name }
        }}
      >
        <img src={country.flag} alt={country.name} />
        <h3>{country.name}</h3>
      </Link>
    </div>
  );
};

export default Flagview;
