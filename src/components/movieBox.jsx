import React from "react";

const MovieBox = props => {
  const { filmsArray } = props;

  return (
    <div>
      <ul className="list-group">
        {filmsArray.map(film => (
          <li
            key={film.id}
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
              <div className="card-header">{film.release_date}</div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>{film.title}</b>
                </h5>
                <p className="card-text">{film.description}</p>
              </div>
              <div className="card-footer">
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
    </div>
  );
};

export default MovieBox;
