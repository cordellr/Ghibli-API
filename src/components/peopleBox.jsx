import React from "react";
import { Link } from "react-router-dom";

const PeopleBox = props => {
  const { peopleArray } = props;

  return (
    <div>
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
                <Link to={`/people/${people.id}`}>
                  <p className="card-text">{people.name}</p>
                </Link>
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
