import React from 'react';
import './index.css'; 

export default function Index({ image, title, description, genre, }) {
  return (
    <div className="movie-index">
      <div className="index-image-container">
        <img src={image} alt={title} className="index-image" />
        <span className="index-genre">{genre}</span>
      </div>
      <div className="index-content">
        <h3 className="index-title">{title}</h3>
        <p className="index-description">{description}</p>
        <button className="index-btn">Смотреть</button>
      </div>
    </div>
  );
}