import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/布局/技术/2 定位(Position)',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div>
  postion的常见值有: static, relative, absolute, fixed。
</div>
`

Main.story = {
  name: '介绍'
}

export const Usage = () => `
<div class="pos-page">
  <h2>相对定位</h2>
  <div class="wrap">
      <div class="pr content">相对定位</div>
      <div class="block"></div>
  </div>


  <h2>绝对定位</h2>
  <h3>父元素不定位(position:static)</h3>
  <div class="ps-pa wrap">
      <div class="pa content">父元素不定位(position:static)</div>
  </div>
  <h3>父元素相对定位</h3>
  <div class="pr-pa wrap">
      <div class="pa content">父元素相对定位</div>
  </div>
  <h3>父元素绝对定位</h3>
  <div class="pr-pa wrap">
      <div class="pa content">父元素绝对定位</div>
  </div>

  <h2>固定定位</h2>
  <div class="wrap">
      <div class="pf content">固定定位</div>
  </div>
</div>
`

Usage.story = {
  name: '常用用法'
}