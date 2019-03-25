import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MovieContainer from "./components/movieContainer";
import PeopleContainer from "./components/peopleContainer";
import MovieCard from "./components/movieCard";
import PersonCard from "./components/personCard";
import Home from "./components/home";
import NavBar from "./components/navBar";
import "./background.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="background d-flex flex-column align-items-center">
          <div className="content">
            <Switch>
              <Route path="/films/:id" component={MovieCard} />
              <Route path="/people/:id" component={PersonCard} />
              <Route path="/films" component={MovieContainer} />
              <Route path="/people" component={PeopleContainer} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
