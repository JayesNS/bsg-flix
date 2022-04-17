import React, {useCallback} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import {ImageTypeCode, Media} from '../../types';
import {MediaCard} from '../MediaCard';
import './MediaList.css';

interface MediaListProps {
  listId?: number; 
  mediaList: Media[];
}

const MediaList = ({listId = 0, mediaList}: MediaListProps) => {
  const renderMediaCard = useCallback((media: Media) => {
    const {
      Id: id,
      Title: title,
      Images: images
    } = media;

    const frameImage = images.find(({ImageTypeCode: imageTypeCode}) => imageTypeCode === ImageTypeCode.FRAME);
    const imageUrl = frameImage?.Url ?? '';

    return (
      <SwiperSlide key={id} >
        <MediaCard key={id} title={title} mediaId={id} imageUrl={imageUrl} />
      </SwiperSlide>
    );
  }, []);

  const renderMediaList = useCallback(() => (
    mediaList?.map(renderMediaCard)
  ), [mediaList, renderMediaCard]);

  return (
    <div className="MediaList swiper">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: `.swiper-${listId}-button-next`,
          prevEl: `.swiper-${listId}-button-prev`,
        }}
        loop
        direction="horizontal"
        autoplay
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
      >
        {renderMediaList()}
      </Swiper>

      <div className={`swiper-button-prev swiper-${listId}-button-prev`}></div>
      <div className={`swiper-button-next swiper-${listId}-button-next`}></div>
    </div>
  );
};

export default MediaList;
