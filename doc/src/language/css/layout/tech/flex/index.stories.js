import './style.css'
import doc from './README.md'

export default {
  title: 'CSS/布局/技术/1 Flexbox',
  parameters: {
    componentSubtitle: '推荐安装 @lucky-joel/css-utils',
    notes: doc,
  }
}

export const Main = () => `
<div class="wrap ly">
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
</div>
`

Main.story = {
  name: '基础写法'
}

export const HorCenter = () => `
<div class="wrap ly ly-c">
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
</div>
`

HorCenter.story = {
  name: '水平居中'
}

export const HorJustify = () => `
<div class="wrap ly ly-j">
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
</div>
`

HorJustify.story = {
  name: '两端对齐'
}

export const Fill = () => `
<div class="wrap ly">
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item lyi-f">填充</div>
</div>
`

Fill.story = {
  name: '填充剩余部分'
}

export const MultiRow = () => `
<div class="wrap ly ly-multi">
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
</div>
`

MultiRow.story = {
  name: '多行'
}

export const VerCenter = () => `
<div class="wrap ly ly-m" style="height: 500px;">
  <div class="item">内容</div>
  <div class="item">内容</div>
  <div class="item">内容</div>
</div>
`

VerCenter.story = {
  name: '垂直居中'
}