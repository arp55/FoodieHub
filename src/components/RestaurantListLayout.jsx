import React, { Component } from "react";
import List from "./restaurantList";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <a className="appName" href={`./`}>
            FoodieHub
          </a>
        </header>
        <main className="container">
          <List />
        </main>
        <footer>FoodieHub © 2019</footer>
      </div>
    );
  }
}

export default Layout;
