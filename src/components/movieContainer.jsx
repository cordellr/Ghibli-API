import React, { Component } from "react";
import MovieBox from "./movieBox";

class MovieContainer extends Component {
  //state = {};

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      //takes result and sparses into json text
      .then(res => res.json())
      .then(obj => console.log(obj));
  }

  render() {
    return <MovieBox />;
  }
}

export default MovieContainer;
