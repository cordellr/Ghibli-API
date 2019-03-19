import React from "react";

const MovieBox = props => {
  const { filmsArray } = props;

  return (
    <ul className="list-group">
      {filmsArray.map(film => (
        <li
          key={film.id}
          className="list-group-item"
          style={{ border: "none" }}
        >
          <div className="card mb-3" style={{ maxWidth: "30rem" }}>
            <div className="card-header bg-light">{film.release_date}</div>
            <div className="card-body">
              <h5 className="card-title">
                <b>{film.title}</b>
              </h5>
              <p className="card-text">{film.description}</p>
            </div>
            <div className="card-footer bg-transparent">
              <div>
                <b>Director</b>: {film.director}
              </div>
              <div>
                <b>Producer</b>: {film.producer}
              </div>
              <div>
                <b>Rotten Tomatoes</b>: {film.rt_score}%
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieBox;
