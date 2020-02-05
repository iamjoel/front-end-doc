import doc from './README.md'
import './style.css'
import baiduLogo from './baidu.jpg'

export default { 
  title: 'CSS/综合Demo/03 Baidu',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => ({
  data() {
    return {
      baiduLogo
    }
  },
  template: `
<div class="container">
  <div id="header">
    <ul class="navs">
      <li class="nav"><a href="###">新闻</a></li>
      <li class="nav"><a href="###">hao123</a></li>
      <li class="nav"><a href="###">地图</a></li>
      <li class="nav"><a href="###">贴吧</a></li>
      <li class="nav"><a href="###">视频</a></li>
      <li class="nav"><a href="###">设置</a></li>
    </ul>
  </div>
  <div id="main">
    <img :src="baiduLogo" alt="" class="logo">
    <form action="#" method="get">
      <input type="text" name="baidu" class="query input">
      <input type="submit" value="百度一下"  class="query btn">
    </form>
  </div>
  <div id="footer">
    <ul class="navs">
      <li class="nav"><a href="###">把百度设为首页</a></li>
      <li class="nav"><a href="###">关于百度</a></li>
      <li class="nav"><a href="###">About Baidu</a></li>
    </ul>
    <div class="copyright">
      ©2015&nbsp;Baidu<a href="#">使用百度前必读</a> 京ICP证030173号
    </div>
  </div>
</div>
`})

Main.story = {
  name: 'Demo'
}
