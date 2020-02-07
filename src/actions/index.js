import axios from "axios";

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FETCH_COUNTRY = "FETCH_COUNTRY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const CLEAR_COUNTRY = "CLEAR_COUNTRY";
export const FETCH_DATA_STATUS = "FETCH_DATA_STATUS";
export const SWITCH_VIEW_STYLE = "SWITCH_VIEW_STYLE";
export const SWITCH_DARK_MODE = "SWITCH_DARK_MODE";

export const fetchCountries = () => dispatch => {
  dispatch({ type: FETCH_DATA_STATUS, payload: { status: "fetching" } });

  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      dispatch({
        type: FETCH_COUNTRIES,
        payload: { countries: res.data, status: "idle" }
      });
    })
    .catch(() =>
      dispatch({ type: FETCH_DATA_STATUS, payload: { status: "error" } })
    );
};

export const fetchCountry = name => dispatch => {
  dispatch({ type: FETCH_DATA_STATUS, payload: { status: "fetching" } });

  axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => {
      dispatch({
        type: FETCH_COUNTRY,
        payload: { country: res.data[0], status: "idle" }
      });
    })
    .catch(() => {
      dispatch({ type: FETCH_DATA_STATUS, payload: { status: "error" } });
    });
};

export const searchCountry = name => dispatch => {
  dispatch({ type: FETCH_DATA_STATUS, payload: { status: "fetching" } });

  axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => {
      dispatch({
        type: SEARCH_COUNTRY,
        payload: { searchResults: res.data, status: "idle" }
      });
    })
    .catch(() => {
      dispatch({ type: FETCH_DATA_STATUS, payload: { status: "error" } });
    });
};

export const clearCountry = () => {
  return { type: CLEAR_COUNTRY, payload: { country: {} } };
};

export const switchViewStyle = view => {
  return { type: SWITCH_VIEW_STYLE, payload: { viewStyle: view } };
};

export const switchDarkMode = value => {
  return { type: SWITCH_DARK_MODE, payload: { darkMode: value } };
};
