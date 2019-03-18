import React from "react";

const MovieBox = props => {
  return (
    <div className="card mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-transparent">Header</div>
      <div className="card-body">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="card-footer bg-transparent">Footer</div>
    </div>
  );
};

export default MovieBox;
