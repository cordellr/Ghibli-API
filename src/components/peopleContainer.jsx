import React, { Component } from "react";
import PeopleBox from "./peopleBox";

class PeopleContainer extends Component {
  state = {
    peopleArray: []
  };

  //pulls people data from Ghibli API, and sets data to peopleArray in state
  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/people";
    const peopleArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());
    //console.log(filmsArray);
    this.setState({ peopleArray });
  }

  render() {
    return <PeopleBox peopleArray={this.state.peopleArray} />;
  }
}

export default PeopleContainer;
