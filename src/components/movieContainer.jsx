import React, { Component } from "react";
import MovieBox from "./movieBox";

class MovieContainer extends Component {
  state = {};

  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/films";
    const apiArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());
    //console.log(filmsArray);
    this.setState({ filmsArray: apiArray });
  }

  render() {
    this.state.filmsArray === undefined
      ? console.log("loading")
      : console.log(this.state.filmsArray);
    return <MovieBox />;
  }
}

export default MovieContainer;
