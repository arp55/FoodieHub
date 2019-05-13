import React, { Component } from "react";
import List from "./restaurantList";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <main className="container-flex">
          <header>
            <a className="appName" href={`./`} style={{ width: "100%" }}>
              FoodieHub
            </a>
          </header>
          <List />
          <footer>FoodieHub © 2019</footer>
        </main>
      </div>
    );
  }
}

export default Layout;
