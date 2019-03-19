import React from "react";

const PeopleBox = props => {
  const { peopleArray } = props;

  return (
    <div>
      <h1
        className="d-flex flex-column align-items-center mt-3 p-2"
        style={{
          color: "aliceblue",
          boxShadow: "4px 4px 24px -3px rgba(0,0,0,0.75)"
        }}
      >
        STUDIO GHIBLI PEOPLE
      </h1>
      <ul className="list-group">
        {peopleArray.map(people => (
          <li
            key={people.id}
            className="list-group-item bg-transparent"
            style={{ border: "none" }}
          >
            <div
              className="card mb-3"
              style={{
                maxWidth: "30rem",
                opacity: "0.85",
                boxShadow: "4px 4px 24px -3px rgba(0,0,0,0.75)"
              }}
            >
              <div className="card-body">
                <p className="card-text">{people.name}</p>
              </div>
              <div className="card-footer">
                <div>
                  <b>Gender</b>: {people.gender}
                </div>
                <div>
                  <b>Age</b>: {people.age}
                </div>
                <div>
                  <b>Eye Color</b>: {people.eye_color}
                </div>
                <div>
                  <b>Hair Color</b>: {people.hair_color}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleBox;
