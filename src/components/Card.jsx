import React from "react";

export default function Card({ card, onClick }) {
  return (
    <div
      className="card"
      onClick={() => onClick(card.id)}
      aria-label={`card-${card.id}`}
    >
      <img src={card.image} alt={card.name} />
      <div className="name">{card.name}</div>
    </div>
  );
}
