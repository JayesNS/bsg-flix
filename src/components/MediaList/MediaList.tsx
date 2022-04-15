import React, {useCallback} from 'react';

import {ImageTypeCode, Media} from '../../types';
import {MediaCard} from '../MediaCard';
import './MediaList.css';

interface MediaListProps {
  mediaList?: Media[];
}

const MediaList = ({mediaList}: MediaListProps) => {
  const renderMediaCard = useCallback((media: Media) => {
    const {
      Id: id,
      Title: title,
      Images: images
    } = media;

    const frameImage = images.find(({ImageTypeCode: imageTypeCode}) => imageTypeCode === ImageTypeCode.COVER);
    const imageUrl = frameImage?.Url ?? '';

    return (
      <MediaCard key={id} title={title} mediaId={id} imageUrl={imageUrl} />
    );
  }, []);

  const renderMediaList = useCallback(() => (
    mediaList?.map(renderMediaCard)
  ), [mediaList, renderMediaCard]);

  return (
    <div className="MediaList">
      {renderMediaList()}
    </div>
  );
};

export default MediaList;
