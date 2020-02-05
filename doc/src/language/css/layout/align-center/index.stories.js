import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/布局/居中',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div>
居中分为水平居中和垂直居中。
</div>
`
Main.story = {
  name: '说明'
}

export const Hor = () => `
<div>
  <h2>行内元素：水平居中</h2>
  <div style="text-align: center">一念靜心 花開遍世界 每临绝境 峰回路又转</div>

  <h2>定宽块级元素</h2>
  <div id="sure-width"></div>
  
  <h2>不定宽块级元素 </h2>
  <h3>方法1: Flex</h3>
  <ul id="no-sure-width-flex">
    <li v-for="i in 5" :key="i" class="page-item">{{i}}</li>
  </ul>
  <h3>方法2: 用绝对定位 和 translate</h3>
  <div id="no-sure-width-position">
    <ul>
      <li v-for="i in 5" :key="i" class="page-item">{{i}}</li>
    </ul>
  </div>

  <h3>方法3: inline－block</h3>
  <ul id="no-sure-width-1">
    <li v-for="i in 5" :key="i" class="page-item">{{i}}</li>
  </ul>
  <h3>方法4: 浮动＋定位</h3>
  <ul id="no-sure-width-2">
    <li v-for="i in 5" :key="i" class="page-item">{{i}}</li>
  </ul>
</div>
`

Hor.story = {
  name: '水平居中'
}

export const Ver = () => `
<div>
  <h2>单行文本的垂直居中</h2>
  <div style="height: 40px; line-height: 40px;background: #f60; color: #fff;">
      随你走在天际，看繁华满地。
  </div>

  <h2>高度不固定的元素的垂直居中</h2>
  <!-- 直接用的 flex 的css，css 不是 scoped 有问题。。。 -->
  <div class="wrap ly ly-m" style="height: 500px;">
    <div class="item">内容</div>
    <div class="item">内容</div>
    <div class="item">内容</div>
  </div>
</div>
`

Ver.story = {
  name: '垂直居中'
}