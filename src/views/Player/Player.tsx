import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';

import './Player.css';
import {MediaService} from '../../services';
import {useAuth} from '../../context';

const Player = () => {
  const {mediaId} = useParams<{mediaId: string}>();
  const {token} = useAuth();
  const [contentUrl, setContentUrl] = useState<string>();

  useEffect(() => {
    if (!mediaId || !token) return;
    MediaService.fetchMediaPlayInfo(parseInt(mediaId, 10), {token})
      .then(({ContentUrl: contentUrl}) => {
        setContentUrl(contentUrl);
      });
  }, []);

  return (
    <div className="Player">
      <ReactPlayer
        url={contentUrl}
        playing
        controls
        width="80%"
        height="100%"
      />
    </div>
  );
};

export default Player;
