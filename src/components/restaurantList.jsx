import React, { Component } from "react";
import "./restaurantList.css";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      res: []
    };
  }

  componentDidMount() {
    const config = {
      headers: { "user-key": "115942f89738b7b0ac654ef3d7042845" }
    };
    axios
      .get(
        "https://developers.zomato.com/api/v2.1/location_details?entity_id=5100&entity_type=zone",
        config
      )
      .then(
        res => {
          this.setState({
            ...this.state,
            isLoaded: true,
            res: res.data.best_rated_restaurant
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
    var { error, isLoaded, res } = this.state;
    console.log(res);
    if (error) {
      return <div className="load">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="load">Loading the page...</div>;
    } else {
      return (
        <ul className="list">
          {res.map(function(item, index) {
            return (
              <div>
                <div className="row row-flex">
                  <div className="col-md-2 col-sm-2 col-xs-6">
                    <li key={index}>
                      <div
                        className="content colour-1"
                        //   onMouseOver={() => {
                        //     document.body.style.cursor = "pointer";
                        //   }}
                      >
                        <img
                          className="imgcss"
                          src={item.restaurant.thumb}
                          alt="none"
                        />
                        <div className="resDisplay">
                          <a
                            href={`./details/${item.restaurant.id}`}
                            className="anchor"
                            style={{ textDecoration: "none", color: "#2d2852" }}
                            title="restaurant details"
                          >
                            <span className="restName">
                              {" "}
                              {item.restaurant.name}
                            </span>
                          </a>
                          <br />
                          <span className="cuisinesList">
                            {item.restaurant.cuisines}
                          </span>
                          <br />
                          <span className="costCss">
                            Average cost for two {item.restaurant.currency}
                            {item.restaurant.average_cost_for_two}
                          </span>
                          <br />
                          <br />
                          <div>
                            <span className="ratingCss">
                              {item.restaurant.user_rating.aggregate_rating}
                            </span>
                            <img
                              src="http://www.downloadclipart.net/large/41208-brown-star-star-clipart.png"
                              className="ratingImg"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      );
    }
  }
}

export default List;