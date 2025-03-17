import React from "react";

interface MovieCardProps {
  title: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterPath }) => {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : "https://via.placeholder.com/150";

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
