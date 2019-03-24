import React, { Component } from "react";

class MovieCard extends Component {
  state = {
    filmsArray: [],
    filmIndex: "",
    film: ""
  };

  //pulls film data from Ghibli API, and sets data to filmsArray in state
  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/films";
    const filmsArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());
    this.setState({ filmsArray });

    //sets film in state based on id passed in match params
    const filmIndex = filmsArray
      .map(function(x) {
        return x.id;
      })
      .indexOf(this.props.match.params.id);
    this.setState({ filmIndex });

    const film = this.state.filmsArray[this.state.filmIndex];
    this.setState({ film });

    console.log(this.state.film);
  }

  render() {
    console.log(this.state.filmIndex);

    return <h1>{this.state.film.title}</h1>;
  }
}

export default MovieCard;
