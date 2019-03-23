import React from "react";

const MovieCard = ({ match }) => {
  console.log(match.params);

  return <h1>{match.params.id}</h1>;
};

export default MovieCard;
