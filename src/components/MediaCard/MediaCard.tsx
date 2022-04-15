import React from 'react';

import './MediaCard.css';

interface MediaCardProps {
  title: string;
  imageUrl: string;
}

const MediaCard = ({title, imageUrl}: MediaCardProps) => {
  return (
    <div className="MediaCard">
      <h6>{title}</h6>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default MediaCard;
