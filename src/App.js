import React, { Component } from "react";
import MovieContainer from "./components/movieContainer";
import totoro from "./totoro.png";

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <img src={totoro} alt="logo" className="img-fluid" />
        <MovieContainer />
      </div>
    );
  }
}

export default App;
