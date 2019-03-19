import React, { Component } from "react";
import MovieContainer from "./components/movieContainer";
import totoro from "./totoro.png";
import PeopleContainer from "./components/peopleContainer";

class App extends Component {
  state = {
    filmsLoaded: false,
    peopleLoaded: false
  };

  //ensures people are removed from page, and enables loading of films
  handleFilms = () => {
    this.setState({ peopleLoaded: false, filmsLoaded: true });
  };

  //ensures films are removed from page, and enables loading of people
  handlePeople = () => {
    this.setState({ filmsLoaded: false, peopleLoaded: true });
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
        <div>
          {/*displays load films button before button is clicked*/}
          {/*button sets filmsLoaded to true*/}
          {!this.state.filmsLoaded && (
            <button
              type="button"
              onClick={this.handleFilms}
              className="btn btn-light m-4"
            >
              Load Studio Ghibli <b>Films</b>
            </button>
          )}
          {/*displays load people button before button is clicked*/}
          {/*button sets peopleLoaded to true*/}
          {!this.state.peopleLoaded && (
            <button
              type="button"
              onClick={this.handlePeople}
              className="btn btn-light m-4"
            >
              Load Studio Ghibli <b>People</b>
            </button>
          )}
        </div>

        {/*returns MovieContainer with load films button*/}
        {this.state.filmsLoaded && <MovieContainer />}

        {/*returns PeopleContainer with load people button*/}
        {this.state.peopleLoaded && <PeopleContainer />}
      </div>
    );
  }
}

export default App;
