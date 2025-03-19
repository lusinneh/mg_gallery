export const getMockPhoto = (id: string) => ({
  id,
  width: 6118,
  height: 4079,
  url: `https://www.pexels.com/photo/url-${id}/`,
  photographer: 'Photographer Name',
  photographer_url: 'https://www.pexels.com/@photographer_url',
  photographer_id: 447123,
  avg_color: '#303030',
  src: {
    original: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`,
    large2x: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    large: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`,
    medium: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=350`,
    small: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=130`,
    portrait: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800`,
    landscape: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`,
    tiny: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280`
  },
  liked: false,
  alt: `Alt text for ${id} photo`
});

export const mockInitialState = {
  photos: [getMockPhoto('1')],
  per_page: 1,
  total_results: 3,
  next_page: 'https://api.pexels.com/v1/curated?page=2&per_page=1',
  prev_page: ''
};

export const mockSecondPagePhotosData = {
  photos: [getMockPhoto('2')],
  per_page: 1,
  total_results: 3,
  next_page: 'https://api.pexels.com/v1/curated?page=3&per_page=1',
  prev_page: 'https://api.pexels.com/v1/curated?page=1&per_page=1'
};

export const mockThirdPagePhotosData = {
  photos: [getMockPhoto('3')],
  per_page: 1,
  total_results: 3,
  next_page: '',
  prev_page: 'https://api.pexels.com/v1/curated?page=2&per_page=1'
};
