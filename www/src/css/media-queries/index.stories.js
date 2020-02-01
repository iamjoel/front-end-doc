import './style.css'

export default { title: 'CSS/媒体查询(有问题)' }

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