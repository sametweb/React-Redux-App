import {
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  CLEAR_COUNTRY,
  FETCH_DATA_STATUS,
  SWITCH_VIEW_STYLE,
  SWITCH_DARK_MODE
} from "../actions";

const INITIAL_STATE = {
  countries: [],
  country: {},
  status: "idle",
  viewStyle: "flag",
  darkMode: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
    case FETCH_COUNTRY:
    case CLEAR_COUNTRY:
    case FETCH_DATA_STATUS:
    case SWITCH_VIEW_STYLE:
    case SWITCH_DARK_MODE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
