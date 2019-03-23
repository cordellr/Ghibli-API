import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MovieContainer from "./components/movieContainer";
import PeopleContainer from "./components/peopleContainer";
import Home from "./components/home";
import NavBar from "./components/navBar";
import "./background.css";

class App extends Component {
  state = {
    filmsLoaded: false,
    peopleLoaded: false
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="background d-flex flex-column align-items-center">
          <div className="content">
            <Switch>
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
