import fetchMock from 'fetch-mock';

fetchMock
  .mock('/api/labs', {
		'datas': [
		  {
				"_id":"54fea41d994f45335f30c686",
				"cover":"http://dn-lay.qbox.me/labs/iframer.jpg",
				"demo_url":"http://bh-lay.github.io/iframer/",
				"git_full_name":"/bh-lay/iframer",
				"id":"14c02b111ab",
				"intro":"一款基于iframe的单页应用组件，用在音频、IM类站点，避免因页面跳转而引起的播放停顿、聊天状态丢失等问题。",
				"name":"iframer",
				"time_create":1425974301084,
				"title":"基于iframe的单页应用组件"
			},
			{
				"_id":"5474144c4038c41b5173fc16",
				"cover":"http://dn-lay.qbox.me/labs/github-widget-user.png",
				"demo_url":"http://htmlpreview.github.io/?https://github.com/bh-lay/github-widget-user/blob/master/demo.html",
				"git_full_name":"bh-lay/github-widget-user",
				"id":"149e56f4967",
				"intro":"一个可以在网站中显示github个人信息的jquery widget组件，提高bigger的又一利器。",
				"name":"github-widget-user",
				"time_create":1416893622355,
				"title":"github个人名片组件"
			},
			{
				"_id":"53bf73e1a32529f758000001",
				"cover":"http://dn-lay.qbox.me/labs/lofox.jpg",
				"demo_url":"/demo/no_demo.html",
				"git_full_name":"/bh-lay/lofox",
				"id":"14723dca9d2",
				"intro":"一个用于单页面路由管理的工具。",
				"name":"lofox",
				"time_create":1409042262055,
				"title":"lofox 单页面路由管理工具"
			},
			{
				"_id":"5392b028b18ec28a64000001",
				"cover":"http://dn-lay.qbox.me/labs/panel.jpg",
				"demo_url":"http://htmlpreview.github.io/?https://github.com/bh-lay/panel/blob/master/index.html",
				"git_full_name":"/bh-lay/panel",
				"id":"14675001d8c",
				"intro":"panel.js是一个基于JQUERY的右键菜单插件，用于用户交互较为复杂的项目。",
				"name":"panel",
				"time_create":1407402774501,
				"title":"右键菜单组件"
			},
			{
				"_id":"533ee928ccc3e54128000002",
				"api_url":"",
				"cover":"http://dn-lay.qbox.me/labs/uploader.jpg",
				"demo_url":"/demo/lab/uploader/index.html",
				"git_full_name":"bh-lay/uploader",
				"id":"1452dbec7f6",
				"intro":"uploader是一个依靠原生html元素处理上传的javascript类，具备丰富的事件型API。",
				"name":"uploader.js",
				"time_create":1407402782726,
				"title":"uploader.js 文件上传组件"
			},
			{
				"_id":"533ee6a6ccc3e54128000001",
				"api_url":"",
				"cover":"http://dn-lay.qbox.me/labs/UI.jpg",
				"demo_url":"/demo/lab/UI/demo.html",
				"git_full_name":"bh-lay/UI",
				"id":"1452db4facb",
				"intro":"UI是前端公用的视觉交互（user interface 、 user interaction）类公用组建，用于和用户间的对话及动态界面展示。",
				"name":"user-interaction",
				"time_create":1420363762571,
				"title":"响应式用户交互组件库"
			},
			{
				"_id":"53063b7d86a96ed944000001",
				"api_url":"https://raw.github.com/bh-lay/loader/master/README.md",
				"cover":"http://dn-lay.qbox.me/labs/loader.jpg",
				"demo_url":"/demo/no_demo.html",
				"git_full_name":"bh-lay/loader",
				"id":"1445058615b",
				"intro":"loader是一个用于加载项目资源的工具，用于剥离文件间的耦合关系，提高模块加载效率。",
				"name":"loader.js",
				"time_create":1407402809395,
				"title":"loader-资源加载利器"
			}
		]
  });

