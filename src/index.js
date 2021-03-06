import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
