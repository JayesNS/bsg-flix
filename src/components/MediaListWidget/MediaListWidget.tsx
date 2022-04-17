import React, {useEffect, useState} from 'react';

import {useAuth} from '../../context';
import {MediaService} from '../../services';
import {Media} from '../../types';
import {MediaList} from '../MediaList';

interface MediaListWidgetProps {
  listId: number;
}

const MediaListWidget = ({listId}: MediaListWidgetProps) => {
  const {token} = useAuth();
  const [mediaList, setMediaList] = useState<Media[]>([]);

  useEffect(() => {
    if (!token) return;
    MediaService.fetchMediaList(listId, {token}).then((response) => {
      setMediaList(response.Entities);
    });
  }, []);

  return (
    <MediaList mediaList={mediaList} listId={listId} />
  );
};

export default MediaListWidget;