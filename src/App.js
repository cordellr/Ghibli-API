import React, { Component } from "react";
import { Route } from "react-router-dom";
import MovieContainer from "./components/movieContainer";
import totoro from "./totoro.png";
import "./background.css";
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
      <div className="background d-flex flex-column align-items-center">
        <img src={totoro} alt="logo" className="img-fluid" />
        <div className="content">
          <Route path="/films" component={MovieContainer} />
          <Route path="/people" component={PeopleContainer} />
        </div>
      </div>
    );
  }
}

export default App;
