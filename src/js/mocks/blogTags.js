import fetchMock from 'fetch-mock';

fetchMock
  .mock('/api/blogTags', {
    'datas': [
      {
          "name": "javascript",
          "count": 22
      },
      {
          "name": "作品",
          "count": 19
      },
      {
          "name": "剧中人",
          "count": 18
      },
      {
          "name": "设计",
          "count": 16
      },
      {
          "name": "jQuery",
          "count": 14
      },
      {
          "name": "生活",
          "count": 9
      },
      {
          "name": "小剧客栈",
          "count": 8
      },
      {
          "name": "分享",
          "count": 7
      },
      {
          "name": "前端",
          "count": 6
      },
      {
          "name": "工具",
          "count": 4
      }
    ]
  });