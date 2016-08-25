import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="not-found">
      	<p className="p1">您所访问的网页不存在或已被删除</p>
      	<p className="p2">文件找不到啦！</p>
      	<h2><a href="/">返回首页</a></h2>
      </div>
    )
  }
}