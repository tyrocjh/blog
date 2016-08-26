import fetchMock from 'fetch-mock';

fetchMock
  .mock('/api/friends', {
    'datas': [
      {
          "name": "朱文龙 Mofei",
          "info": "朱文龙 （Mofei） , 百度高级研发工程师 ，2010年开始研究web前端技术，一个极具潜力的全栈工程师。",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "YOMTAAA",
          "info": "1998的高三妹纸，自称IT界的一条杂鱼，但是比任何人都爱好这行，后生可畏啊！",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "M.J",
          "info": "一个精神不正常的90后青年，爱生活、爱折腾、爱玩手机，当然，更爱Code 爱电影、爱音乐，偶尔有的时候也会折腾代码。",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "何东杰",
          "info": "剧大大想破脑门儿也没想到怎么描述！",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "hankewins",
          "info": "易翰，金立移动互联网前端开发工程师。",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "小林Design",
          "info": "自幼爱好美术，而后自学设计，没有高等美院的通行证，但对设计的热爱，从未改变！",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "kevin",
          "info": "前端还是比较有味的，进来学习的",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "我已经从中二毕业",
          "info": "不搞前端会死星人！高中生！",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "热前端",
          "info": "这位好友竟然不是一位肉身的朋友，而是一个前端开发阅读分享网站，内容筛选的不错，值得一看。",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      },
      {
          "name": "Joozo",
          "info": "每天清晨，朝着牛逼的方向努力！只为曾经心动过的梦想！",
          "blog": "http://www.zhuwenlong.com/",
          "github": "https://github.com/zmofei"
      }
    ]
  });