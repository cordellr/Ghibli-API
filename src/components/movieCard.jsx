import React, { Component } from "react";

class MovieCard extends Component {
  state = {
    film: ""
  };

  //pulls film data from Ghibli API, and sets data to filmsArray in state
  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/films";
    const filmsArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());

    //finds index of film based on id passed in match params
    const filmIndex = filmsArray
      .map(function(x) {
        return x.id;
      })
      .indexOf(this.props.match.params.id);

    //sets film objects in state based on indexed array value
    const film = filmsArray[filmIndex];
    this.setState({ film });
  }

  render() {
    return (
      <div
        className="card mb-3 mt-5"
        style={{
          maxWidth: "30rem",
          opacity: "0.85",
          boxShadow: "4px 4px 24px -3px rgba(0,0,0,0.75)"
        }}
      >
        <div className="card-header">{this.state.film.release_date}</div>
        <div className="card-body">
          <h5 className="card-title">
            <b>{this.state.film.title}</b>
          </h5>
          <p className="card-text">{this.state.film.description}</p>
        </div>
        <div className="card-footer">
          <div>
            <b>Director</b>: {this.state.film.director}
          </div>
          <div>
            <b>Producer</b>: {this.state.film.producer}
          </div>
          <div>
            <b>Rotten Tomatoes</b>: {this.state.film.rt_score}%
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
