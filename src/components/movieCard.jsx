import React, { Component } from "react";

class MovieCard extends Component {
  state = {
    filmsArray: []
  };

  //pulls film data from Ghibli API, and sets data to filmsArray in state
  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/films";
    const filmsArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());
    //console.log(filmsArray);
    this.setState({ filmsArray });
  }

  render() {
    const filmObj = this.state.filmsArray
      .map(function(x) {
        return x.id;
      })
      .indexOf(this.props.match.params.id);

    console.log(filmObj);
    console.log(this.props.match.params);
    return <h1>{this.props.match.params.id}</h1>;
  }
}

export default MovieCard;
