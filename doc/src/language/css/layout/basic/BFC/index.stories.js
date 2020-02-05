import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/布局/基础/3 BFC',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => ({
  template: `
<div class="bfc-demo">
  <h2>计算BFC的高度时，浮动元素也参与计算</h2>
  <div class="bfc-1">
      <div class="inner"></div>
  </div>

  <h2>内部的Box会在垂直方向，一个接一个地放置。</h2>
  <div class="bfc-2">
    <p>我不愿提起窦唯，他总是年轻的</p>
    <p>载我一片痴心妄想</p>
  </div>

  <h2>BFC的区域不会与float box重叠。</h2>
  <div class="fl"></div>
  <div class="bfc-3"></div>
</div>
`})

Main.story = {
  name: '基础用法'
}