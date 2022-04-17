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
    <div className="MediaCard" onClick={openPlayer} data-testid="media-card" >
      <h6>{title}</h6>
      <img src={imageUrl} alt={title} data-testid="media-card-image" />
    </div>
  );
};

export default MediaCard;
