import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/布局/技术/4 grid',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="grid-demo">
  <h2>默认</h2>
  <div class="ly">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>
  <h2>水平居中对齐</h2>
  <div class="ly ly--center">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>
  <h2>靠右对齐</h2>
  <div class="ly ly--right">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>
  <h2>两端对齐</h2>
  <div class="ly ly--justify">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>

  <h2>一列最少宽200px。1行能放多少就放多少</h2>
  <div class="ly ly--autofill">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>

  <h2>多行两端对齐</h2>
  <div class="ly ly--multi-line ly--justify">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>
  <h2>充满剩余部分</h2>
  <div class="ly ly--fill">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>

  <h2>垂直居中</h2>
  <div class="ly ly--middle" style="height: 200px;background: #ddd;">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>

  <h2>完全居中</h2>
  <div class="ly ly--center ly--middle" style="height: 200px;background: #ddd;">
    <div class="ly__item">A</div>
    <div class="ly__item">B</div>
    <div class="ly__item">C</div>
  </div>

  <h2>栅格</h2>
  <!-- 
  1. 定义多少行，多少列。
  2. 一个元素占几行，几列
  3. 元素的对齐方式。包括所有元素的对齐方式和单个的对齐方式 -->
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1"></div>
      <div class="col-8"></div>
      <div class="col-2"></div>
    </div>
  </div>
  <h2>九宫格</h2>
  
  <div class="ly demo--11">
    <div class="j-item" 
      v-for="i in 5" :key="i"
      :class="['j-item-' + i]"
    >
    </div>
  </div>
</div>
`

Main.story = {
  name: '基础用法'
}