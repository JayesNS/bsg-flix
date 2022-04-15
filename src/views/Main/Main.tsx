import React, {useEffect, useState} from 'react';
import {useAuth} from '../../context';
import {MediaService} from '../../services';
import {Media} from '../../types';
import {MediaList} from '../../components';

import './Main.css';

const Main = () => {
  const {token} = useAuth();
  const [mediaList, setMediaList] = useState<Media[]>();

  useEffect(() => {
    if (!token) return;
    MediaService.fetchMediaList(2, {token}).then((response) => {
      setMediaList(response.Entities);
    });
  }, [token]);

  return (
    <div className="Main">
      <MediaList mediaList={mediaList} />
    </div>
  );
};

export default Main;
