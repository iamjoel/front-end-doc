import './style.css'
import doc from './README.md'

export default {
  title: 'CSS/媒体查询',
  parameters: {
    notes: doc
  }
}

export const Main = () => `
<div>
  <div class="hide pc">PC</div>
  <div class="hide iphone6">iphone6</div>
  <div class="hide ipad">iPad</div>
</div>
`

Main.story = {
  name: '基础用法'
}