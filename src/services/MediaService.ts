import {MediaListResponse, ResponseError} from '../types';

export const fetchMediaList = async (listId: number, {token}: {token: string}): Promise<MediaListResponse> => {
  const response = await fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      MediaListId: listId,
      IncludeCategories: false,
      IncludeImages: true,
      IncludeMedia: false,
      PageNumber: 1,
      PageSize: 15
    })
  });
  const data = await response.json();
  if ((data as ResponseError).ErrorDetail) {
    return Promise.reject(data);
  }
  return Promise.resolve(data);
};
