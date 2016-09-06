import fetchMock from 'fetch-mock';

fetchMock
  .mock('/api/comment', {
		'datas': [
      {
          "content": "@夕风色&#160;d",
          "time": 1472720395441,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "566260d8fe36f55c7828b40d",
          "user": {
              "username": "walkeraaaaaaaaaaaaaaaaaaaaaaaaaaa"
          },
          "_id": "57c7ee0b42331cf875cbd9ed"
      },
      {
          "content": "@1212&#160;其实很简单，评论的每条记录包含评论的各个字段，以及归属标识，基于&#160;mongo&#160;存储实现的，原理及过程都很简单，唯一比较挫的是评论数据与用户数据（其实只有我自己而已）做拼接完全得靠手动，不像关系型数据库可以很方便的进行联表查询。",
          "time": 1468829796161,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "57872bc9fae3f67d191b29a1",
          "uid": "14221db9321",
          "_id": "578c9064fae3f67d191b29a3",
          "user": {
              "avatar": "//dn-lay.qbox.me/user/avatar/lay.jpg?imageView2/2/w/100/q/85",
              "id": "14221db9321",
              "username": "剧中人"
          }
      },
      {
          "content": "问下据大大这个评论系统是怎么写的",
          "time": 1468476361471,
          "cid": "blog-14eaec346e5",
          "reply_for_id": null,
          "user": {
              "username": "1212",
              "blog": "www.baidu.com"
          },
          "_id": "57872bc9fae3f67d191b29a1"
      },
      {
          "content": "@夕风色&#160;过奖了，其实我自己只是个小喽喽，逗大伙儿一笑而已。",
          "time": 1449375345061,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "566260d8fe36f55c7828b40d",
          "uid": "14221db9321",
          "_id": "5663b671fe36f55c7828b40e",
          "user": {
              "avatar": "//dn-lay.qbox.me/user/avatar/lay.jpg?imageView2/2/w/100/q/85",
              "id": "14221db9321",
              "username": "剧中人"
          }
      },
      {
          "content": "水平是大大级别，但是字里行间却写的非常风趣而且看着让人舒服！~！",
          "time": 1449287896000,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "",
          "user": {
              "username": "夕风色",
              "blog": "",
              "avatar": "//www.gravatar.com/avatar/8f94fefe93f9436e378d030f8590aab3"
          },
          "_id": "566260d8fe36f55c7828b40d"
      },
      {
          "content": "@Mofei&#160;Zhu&#160;&#160;我无意中看到一只苍蝇飞到一坨翔上",
          "time": 1437660268394,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "55b0d26dbddf7d303ffcb3ef",
          "user": {
              "username": "你猜",
              "blog": ""
          },
          "_id": "55b0f46cbddf7d303ffcb3f1"
      },
      {
          "_id": "55b0d26dbddf7d303ffcb3ef",
          "content": "@你猜&#160;&#160;参加iWeb峰完后的二十二天又十九小时三十九分钟，我坐在电脑前，敲着代码，突然飞过来一只苍蝇。",
          "time": 1437651565632,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "55b0b9ccbddf7d303ffcb3ee",
          "user": {
              "username": "Mofei Zhu",
              "blog": "http://www.zhuwenlong.com",
              "avatar": "//www.gravatar.com/avatar/7cb29be8a5c16b6fbce6159bc94687a1"
          }
      },
      {
          "content": "@剧中人&#160;&#160;我是三个中那个",
          "time": 1437645260428,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "55b0aa54bddf7d303ffcb3ed",
          "user": {
              "username": "你猜",
              "blog": ""
          },
          "_id": "55b0b9ccbddf7d303ffcb3ee"
      },
      {
          "content": "@夕风色&#160;d",
          "time": 1472720395441,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "566260d8fe36f55c7828b40d",
          "user": {
              "username": "walkeraaaaaaaaaaaaaaaaaaaaaaaaaaa"
          },
          "_id": "57c7ee0b42331cf875cbd9ed"
      },
      {
          "content": "@1212&#160;其实很简单，评论的每条记录包含评论的各个字段，以及归属标识，基于&#160;mongo&#160;存储实现的，原理及过程都很简单，唯一比较挫的是评论数据与用户数据（其实只有我自己而已）做拼接完全得靠手动，不像关系型数据库可以很方便的进行联表查询。",
          "time": 1468829796161,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "57872bc9fae3f67d191b29a1",
          "uid": "14221db9321",
          "_id": "578c9064fae3f67d191b29a3",
          "user": {
              "avatar": "//dn-lay.qbox.me/user/avatar/lay.jpg?imageView2/2/w/100/q/85",
              "id": "14221db9321",
              "username": "剧中人"
          }
      },
      {
          "content": "问下据大大这个评论系统是怎么写的",
          "time": 1468476361471,
          "cid": "blog-14eaec346e5",
          "reply_for_id": null,
          "user": {
              "username": "1212",
              "blog": "www.baidu.com"
          },
          "_id": "57872bc9fae3f67d191b29a1"
      },
      {
          "content": "@夕风色&#160;过奖了，其实我自己只是个小喽喽，逗大伙儿一笑而已。",
          "time": 1449375345061,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "566260d8fe36f55c7828b40d",
          "uid": "14221db9321",
          "_id": "5663b671fe36f55c7828b40e",
          "user": {
              "avatar": "//dn-lay.qbox.me/user/avatar/lay.jpg?imageView2/2/w/100/q/85",
              "id": "14221db9321",
              "username": "剧中人"
          }
      },
      {
          "content": "水平是大大级别，但是字里行间却写的非常风趣而且看着让人舒服！~！",
          "time": 1449287896000,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "",
          "user": {
              "username": "夕风色",
              "blog": "",
              "avatar": "//www.gravatar.com/avatar/8f94fefe93f9436e378d030f8590aab3"
          },
          "_id": "566260d8fe36f55c7828b40d"
      },
      {
          "content": "@Mofei&#160;Zhu&#160;&#160;我无意中看到一只苍蝇飞到一坨翔上",
          "time": 1437660268394,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "55b0d26dbddf7d303ffcb3ef",
          "user": {
              "username": "你猜",
              "blog": ""
          },
          "_id": "55b0f46cbddf7d303ffcb3f1"
      },
      {
          "_id": "55b0d26dbddf7d303ffcb3ef",
          "content": "@你猜&#160;&#160;参加iWeb峰完后的二十二天又十九小时三十九分钟，我坐在电脑前，敲着代码，突然飞过来一只苍蝇。",
          "time": 1437651565632,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "55b0b9ccbddf7d303ffcb3ee",
          "user": {
              "username": "Mofei Zhu",
              "blog": "http://www.zhuwenlong.com",
              "avatar": "//www.gravatar.com/avatar/7cb29be8a5c16b6fbce6159bc94687a1"
          }
      },
      {
          "content": "@剧中人&#160;&#160;我是三个中那个",
          "time": 1437645260428,
          "cid": "blog-14eaec346e5",
          "reply_for_id": "55b0aa54bddf7d303ffcb3ed",
          "user": {
              "username": "你猜",
              "blog": ""
          },
          "_id": "55b0b9ccbddf7d303ffcb3ee"
      }
		]
	})