import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/规则/过渡(Transition)',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="transition-page">
  <h2>hover时，2秒时间，宽度由100px变为200px</h2>
    <div class="simple-trans"></div>

    <h2>hover时，2秒时间，宽度由100px变为200px。宽度变化完后，高度变为200px</h2>
    <div class="delay-trans"></div>

</div>
`

Main.story = {
  name: '基础用法'
}