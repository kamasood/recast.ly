import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

// REST endpoint: https://app-hrsei-api.herokuapp.com/api/recastly/videos

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: (data) => callback(data),
    error: function(error) {
      console.error('Recast.ly: Failed to fetch video list', error);
    }
  });
};

export default searchYouTube;
