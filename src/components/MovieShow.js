import React from "react";
import { useParams } from "react-router-dom";

const MovieShow = ({ movies }) => {
  const movieDetail = useParams();
  return (
    <div>
      <h3>Movies Show Component!</h3>
      <p>{movies[movieDetail.movieId].title}</p>
    </div>
  );
};

export default MovieShow;
