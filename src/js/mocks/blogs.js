import fetchMock from 'fetch-mock';

fetchMock
  .mock('/api/blogs', {
    'datas': [
      "a": "1"
    ]
  });