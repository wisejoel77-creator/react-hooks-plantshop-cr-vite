import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setisSoldOut] = useState(plant.soldOut);

function handleSoldOut() {
  setisSoldOut(!isSoldOut );
}

  return (
    <div className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      ${Number(plant.price ?? 0).toFixed(2)}
      
        <button className="primary" onClick={handleSoldOut}>
          {isSoldOut ? "Mark as In Stock" : "Mark as Sold Out"}
          </button>
          {isSoldOut && <p className="sold-out">SOLD OUT</p>}     

      
    </div>
  );
}

export default PlantCard;
