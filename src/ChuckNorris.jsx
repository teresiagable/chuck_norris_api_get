import React, { Component, Fragment } from "react";
import axios from "axios";
import PropTypes from "prop-types";

class ChuckNorris extends Component {
  state = {
    fact: "Hämtar fakta",
  };

  //dåligt exempel på hur man får ett nytt anrop
  refreshPage = () => {
    window.location.reload(false);
  };

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://rapidapi.p.rapidapi.com/jokes/random",
      headers: {
        accept: "application/json",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "1a4e58465fmsh3afbee6ec4419bcp10eb41jsn6534d65361e8",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({ fact: response.data.value });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <Fragment>
        <h2>Fakta om Chuck</h2>
        <h2>{this.state.fact}</h2>

        <button type="button" onClick={() => this.refreshPage()}>
          {" "}
          Hämta ny fakta{" "}
        </button>
      </Fragment>
    );
  }
}
export default ChuckNorris;
