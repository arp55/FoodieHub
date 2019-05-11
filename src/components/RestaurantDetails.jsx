import React, { Component } from "react";
import axios from "axios";
import "./RestaurantDetails.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: []
    };
  }
  componentDidMount() {
    var dest = this.props.location.pathname.substr(
      this.props.location.pathname.lastIndexOf("/") + 1
    );
    console.log(dest);
    const config = {
      headers: { "user-key": "115942f89738b7b0ac654ef3d7042845" }
    };
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/restaurant?res_id=` + dest,
        config
      )
      .then(
        result => {
          this.setState({
            ...this.state,
            isLoaded: true,
            result: result.data
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }
  render() {
    var { error, isLoaded, result } = this.state;
    console.log(result);
    var delivery = result.has_online_delivery;
    console.log(delivery);
    if (delivery == 0) {
      var resu = "DELIVERY UNAVAILABLE";
    } else {
      var resu = "ORDER NOW";
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="load">Loading the page...</div>;
    } else {
      return (
        <div>
          <header>
            <a
              className="appName"
              href={`https://shrouded-dawn-78140.herokuapp.com/`}
            >
              FoodieHub
            </a>
          </header>
          <main className="container">
            <div className="row row-flex">
              <div className="col-md-2 col-sm-2 col-xs-6">
                <div className="restName1">
                  {result.name}
                  <span className="spanCss">
                    {result.user_rating.aggregate_rating}{" "}
                  </span>
                </div>
                <div className="restdet">
                  <img
                    src={result.featured_image}
                    alt="no img found"
                    className="restImg"
                  />
                  <span className="location">
                    <img
                      className="locationimg"
                      src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/location-256.png"
                      alt="no image found"
                    />
                    {result.location.address}{" "}
                  </span>
                  <br />
                  <span className="cuisine">{result.cuisines}</span>
                  <br />
                  <br />
                  <span className="deli">{resu}</span>
                </div>
              </div>
            </div>
          </main>
          <footer>FoodieHub © 2019</footer>
        </div>
      );
    }
  }
}

export default Details;
