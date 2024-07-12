import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={name} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p><span>Points per Game:</span> {stats.pointsPerGame}</p>
        <p><span>Assists per Game:</span> {stats.assistsPerGame}</p>
        <p><span>Rebounds per Game:</span> {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
