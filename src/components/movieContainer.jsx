import React, { Component } from "react";
import MovieBox from "./movieBox";
import "isomorphic-fetch";
import "es6-promise";

class MovieContainer extends Component {
  state = {
    filmsArray: []
  };

  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/films";
    const filmsArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());
    //console.log(filmsArray);
    this.setState({ filmsArray });
  }

  render() {
    this.state.filmsArray === undefined
      ? console.log("loading")
      : console.log(this.state.filmsArray);
    return <MovieBox filmsArray={this.state.filmsArray} />;
  }
}

export default MovieContainer;
