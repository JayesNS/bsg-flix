import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';

import './Player.css';
import {MediaService} from '../../services';
import {useAuth} from '../../context';
import {ResponseError} from '../../types';

const Player = () => {
  const {mediaId} = useParams<{mediaId: string}>();
  const {token, user} = useAuth();
  const [contentUrl, setContentUrl] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!mediaId || !token) return;
        await MediaService.fetchMediaPlayInfo(parseInt(mediaId, 10), !user, {token})
          .then(({ContentUrl: contentUrl}) => {
            setContentUrl(contentUrl);
          });
      } catch(e) {
        const {Message: message} = e as ResponseError;
        alert(message);
      }
    };
    fetchData();
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
            pip={false}
          />
        )
        : renderNoPlayback()
      }
    </div>
  );
};

export default Player;
