import React from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

const Flagview = ({ country }) => {
  return (
    <div className="country">
      <Link
        to={{
          pathname: slugify(country.name),
          state: { countryName: country.name }
        }}
      >
        <img src={country.flag} alt={country.name} width="50" />
      </Link>
    </div>
  );
};

export default Flagview;
