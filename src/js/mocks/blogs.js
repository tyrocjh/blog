import fetchMock from 'fetch-mock';

fetchMock
  .mock('/api/blogs', {
    'datas': [
      {
          "_id": "56c2e0b93885dcd118caa2a8",
          "author": "",
          "cover": "//dn-lay.qbox.me/blog/3d_pic/dinosaur.jpg",
          "id": "152e93dd5cf",
          "intro": "无论再精彩的3D立体画，终究都是站在某一点观察平面图像时产生的错觉而已。经过小剧的一番思考，发现可以利用 photoshop 快速制作出一些有意思的3D立体图。",
          "tags": [
              "3D",
              "立体图",
              "生活",
              "设计"
          ],
          "time_show": "1455612089787",
          "title": "在办公室里就可以做的3D立体画"
      },
      {
          "_id": "567cb868c9c038c611a02175",
          "author": "",
          "cover": "//dn-lay.qbox.me/blog/toucher/Qzone.jpg",
          "id": "151d7305a1b",
          "intro": "手势是帮助用户完成人机交互的其中一个环节，简单来说手势是一种输入方式、可以起到简化界面元素、增加交互趣味性的作用。",
          "tags": [
              "javascript",
              "手势"
          ],
          "time_show": "1451014248970",
          "title": "移动手势的秘密"
      },
      {
          "_id": "566d8a2bc9c038c611a02162",
          "author": "",
          "cover": "",
          "id": "1519be3ba31",
          "intro": "强大的DOM选择器和兼容性方面的处理，是很多人离不开jQuery 的一大原因，若项目在浏览器支持上并不需要向下兼容，合理的放弃 jQuery 倒也未尝不可，小剧就来说说如何实现 dom 的选择查找。",
          "tags": [
              "javascript",
              "jQuery"
          ],
          "time_show": "1450019371553",
          "title": "剿灭 jQuery 的第一步（IE8+）"
      },
      {
          "_id": "56654eefa5b4c3205c791fc7",
          "author": "剧中人",
          "cover": "",
          "id": "1517bbc58f4",
          "intro": "构建对象时添加自定义方法`destroy`，手动销毁对象内部的一些引用，用来弥补仅靠移除`DOM`并不能达到销毁对象的缺陷。",
          "tags": [
              "javascript",
              "destroy",
              "销毁"
          ],
          "time_show": "1449479919840",
          "title": "对象的自我销毁"
      },
      {
          "_id": "561fbc11e40d241b0f19e010",
          "author": "",
          "cover": "//dn-lay.qbox.me/blog/calendar/demo.png",
          "id": "1506bf6a3f8",
          "intro": "WEB开发中，常常会涉及到对日期的选择操作，日历控件的使用尤为频繁，今天小剧就来扒一扒如何一步步实现一枚日历。",
          "tags": [
              "日历",
              "javascript"
          ],
          "time_show": "1444920337384",
          "title": "一枚日历的成长史"
      },
      {
          "_id": "55c77610e40d241b0f19dfe1",
          "author": "剧中人",
          "cover": "//dn-lay.qbox.me/blog/seaport/cover.jpg",
          "id": "14f132531e0",
          "intro": "Seaport是小剧客栈精炼代码替换Sea.js走的最后一公里，并不适合所有情况，如果你的项目同时满足下面的这些条件，还是可以一试的。1、全部需要的 JS 都都已合并至同一个文件，2、除了主文件，没有通过seajs.use引用其他文件，3、没有使用seajs插件。",
          "tags": [
              "Seaport",
              "javascript",
              "Sea.js",
              "压缩",
              "优化"
          ],
          "time_show": "1439135248847",
          "title": "Seaport，极致之后再进一步"
      },
      {
          "_id": "55adc366ece60c7d1b870ad5",
          "author": "",
          "cover": "//dn-lay.qbox.me/blog/iweb2015/cover.jpg",
          "id": "14eaec346e5",
          "intro": "爱凑热闹的小剧这次又混进了iWeb峰会，不过想想我七点就爬起床，上班都没有这般热情，也是蛮不容易的。",
          "tags": [
              "活动",
              "交流会"
          ],
          "time_show": "1437451110101",
          "title": "参加iWeb峰会是种什么样的体验？"
      },
      {
          "_id": "559d513c83e0a8de2864307d",
          "author": "",
          "cover": "//dn-lay.qbox.me/blog/visibilitychange/cover.jpg",
          "id": "14e6e855585",
          "intro": "继各大站点、博客在用console发招聘、玩游戏、埋彩蛋之后，小剧似乎又发现了一个好玩儿的东西，目测会火，利用页面可见性API做些小技俩。",
          "tags": [
              "visibilitychange",
              "page",
              "visibility",
              "javascript"
          ],
          "time_show": "1436373308787",
          "title": "利用页面可见性API搞个怪"
      },
      {
          "_id": "5589840f2504c9910cefb2e4",
          "author": "",
          "cover": "//dn-lay.qbox.me/blog/toucher/cover.jpg",
          "id": "14e212bdbeb",
          "intro": "伴随着移动端的发展，触摸交互的手势也越来越丰富，从起初最简单的点击发展到现在的长按、侧滑、拖动等，更为复杂的还会有双指缩放等事件。可以说，手势设计在移动页面上起到了简化界面元素，增加交互多样性的重要角色。",
          "tags": [
              "手势",
              "javascript",
              "前端",
              "touch",
              "toucher"
          ],
          "time_show": "1435075599323",
          "title": "单指手势事件的实现"
      },
      {
          "_id": "556c0dc459d4ff492fca482f",
          "author": "",
          "cover": "//dn-lay.qbox.me/images/liferay_frontEnd_dev.png",
          "id": "14dae15c964",
          "intro": "马上就要离开上海贝尔 CDC 项目组了，这里整理下这一年工作中，个人在前端方面对 Liferay 使用的一点儿经验，作为阶段性工作的总结，也供使用此框架的朋友参考。",
          "tags": [
              "liferay",
              "前端",
              "nodejs",
              "工具"
          ],
          "time_show": "1433144772946",
          "title": "Liferay前端非侵入式开发（完结）"
      }
    ]
  });