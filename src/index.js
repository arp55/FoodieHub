import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Details from "./components/RestaurantDetails";
import "bootstrap/dist/css/bootstrap.css";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/details" component={Details} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
