import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export default function Card({data}) {
  return (
    <Link to={`/ditel/${data.id}`}>
    <div className="card-container">
      <div className="card-image-wrapper">
        <img 
          src={data.image}
          alt="Товар" 
          className="card-img"
        />
        <span className="card-badge">Новинка</span>
      </div>

      <div className="card-content">
        <h3 className="card-title">
         {data.name}
        </h3>
        
        <p className="card-description">
        {data.description}
        </p>

        <div className="card-price-block">
          <span className="card-price-current">${data.price}</span>
          <span className="card-price-old">${data.oldPrice}</span>
        </div>

        <div className="card-actions">
          <button className="card-btn-buy">
            Купить
          </button>
          
          <button className="card-btn-like">
            <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}