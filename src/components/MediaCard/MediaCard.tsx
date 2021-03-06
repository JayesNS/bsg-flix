import React from 'react';
import {useNavigate} from 'react-router-dom';

import './MediaCard.css';

interface MediaCardProps {
  mediaId: number;
  title: string;
  imageUrl?: string;
}

const MediaCard = ({mediaId, title, imageUrl}: MediaCardProps) => {
  const navigate = useNavigate();

  const openPlayer = () => {
    navigate(`/player/${mediaId}`);
  };

  return (
    <div className="MediaCard card" onClick={openPlayer} data-testid="media-card" >
      <img src={imageUrl} alt={title} data-testid="media-card-image" />
      <h3 className="MediaCard__title">{title}</h3>
    </div>
  );
};

export default MediaCard;
