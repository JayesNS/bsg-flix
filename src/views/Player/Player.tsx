import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
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

  const renderNoPlayback = () => (
    <div>
      No playback
      <Link to="/home">
        <button className="flat">Back to home page</button>
      </Link>
    </div>
  );

  return (
    <div className="Player">
      {contentUrl
        ? (
          <ReactPlayer
            url={contentUrl}
            playing
            controls
            width="100%"
            height="100%"
          />
        )
        : renderNoPlayback()
      }
    </div>
  );
};

export default Player;
