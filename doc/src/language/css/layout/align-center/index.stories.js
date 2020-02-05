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
  <h3>方法2: inline－block</h3>
  <ul id="no-sure-width-1">
    <li v-for="i in 5" :key="i" class="page-item">{{i}}</li>
  </ul>
  <h3>方法3: 浮动＋定位</h3>
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
  
</div>
`

Ver.story = {
  name: '垂直居中'
}