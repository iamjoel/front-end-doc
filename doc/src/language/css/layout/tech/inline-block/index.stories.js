import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/布局/技术/3 inline-block',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div>
  <h2>多个元素在一行</h2>
  <div class="ib">
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
  </div>
  <h2>多个元素水平居中对齐</h2>
  <div class="ib ib--center">
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
  </div>
  <h2>多个元素水平两端对齐</h2>
  <div class="ib ib--justify">
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
  </div>
  <h2>多行的两端对齐很丑。。。</h2>
  <div class="ib ib--justify">
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
  </div>

  <h2>多个元素在一行，某个元素(只能是最后一个元素)占据剩余部分(用float 实现)</h2>
  <div class="ib ib--fill">
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item ib__item--fill" style="height:100px;background: red"></div>
  </div>
  <h2>多个元素水平居右对齐</h2>
  <div class="ib ib--right">
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
    <div class="ib__item"></div>
  </div>
  <h2>多个元素垂直居中对齐</h2>
  <div class="ib ib--middle" style="height: 300px;background-color: rgb(188, 109, 88)">
    <div class="ib__item"></div>
    <div class="ib__item" style="height: 120px;"></div>
    <div class="ib__item" style="height: 150px;"></div>
    <div class="ib__item" style="height: 190px;"></div>
  </div>
</div>
`

Main.story = {
  name: '基础用法'
}