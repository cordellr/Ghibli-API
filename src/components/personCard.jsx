import React, { Component } from "react";

class PersonCard extends Component {
  state = {
    person: ""
  };

  //pulls people data from Ghibli API
  async componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/people";
    const personArray = await fetch(apiUrl)
      //takes result and parses into an array of objects
      .then(res => res.json());

    //finds index of person based on id passed in match params
    const personIndex = personArray
      .map(function(x) {
        return x.id;
      })
      .indexOf(this.props.match.params.id);

    //sets person object in state based on indexed array value
    const person = personArray[personIndex];
    this.setState({ person });
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
        <div className="card-body">
          <p className="card-text">{this.state.person.name}</p>
        </div>
        <div className="card-footer">
          <div>
            <b>Gender</b>: {this.state.person.gender}
          </div>
          <div>
            <b>Age</b>: {this.state.person.age}
          </div>
          <div>
            <b>Eye Color</b>: {this.state.person.eye_color}
          </div>
          <div>
            <b>Hair Color</b>: {this.state.person.hair_color}
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;
