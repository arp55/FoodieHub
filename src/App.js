import React, { Component } from "react";
import "./App.css";
// import "./components/navbar";
import Layout from "./components/RestaurantListLayout";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Layout />
      </React.Fragment>
    );
  }
}

export default App;
