# blog-demo
from：http://bh-lay.com/

Q:
1.page-transition-leave无效果
2.scss文件里面的background-image一定要被webpack转化为base64吗？不然编译报错？
3.webpack.config.prod.js not finished yet!!

tech:
bootstrap, es6, react, redux, sass, webpack

dev -> prod:
main.js -> import './mocks/labs';

todo:
0.detail page
1.mobile
2.react-masonry-component
3.export function fetchLabsIfNeeded() {
	return (dispatch, getState) => {
 		return dispatch(fetchLabs());
 	}
}