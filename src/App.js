import React, { Component } from "react";
import MovieContainer from "./components/movieContainer";
import totoro from "./totoro.png";

class App extends Component {
  state = {
    filmsLoaded: false
  };

  handleFilms = () => {
    this.setState({ filmsLoaded: true });
  };

  render() {
    return (
      <div
        className="d-flex flex-column align-items-center"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #86fde8, #acb6e5"
        }}
      >
        <img src={totoro} alt="logo" className="img-fluid" />
        {!this.state.filmsLoaded && (
          <button
            type="button"
            onClick={this.handleFilms}
            className="btn btn-light m-2"
          >
            Load Studio Ghibli Films
          </button>
        )}
        {this.state.filmsLoaded && <MovieContainer />}
      </div>
    );
  }
}

export default App;
