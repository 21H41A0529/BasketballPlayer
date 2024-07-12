import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import "./App.css"

const App = () => {
  const player = {
    name: "LeBron James",
    image: "https://res.cloudinary.com/dpf3dhf45/image/upload/v1720758365/uh1ohp7ly6untk1xgdk9.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <h1>Basketball Player Card</h1>
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
};

export default App;
