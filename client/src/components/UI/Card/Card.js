import React from 'react';
import './Card.css';

const Card = (props) => {
  if (props.index !== 0) {
    return <img className="CardView" src={props.img} alt={props.img} />;
  } else {
    return null;
  }
};

export default Card;
