import React from 'react';

const Rating = ({ value, max }) => {
  const Star = ({ filled }) => (
    <span style={{ color: filled ? '#751fff' : 'gray', fontSize: "25px" }}>
      ★
    </span>
  );

  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div>
      {stars.map(star => (
        <Star key={star} filled={star <= value} />
      ))}
    </div>
  );
};

export default Rating;
