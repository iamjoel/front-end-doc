import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/规则/BoxShadow',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="box-shadow-page">
  <div class="target">
    </div>
    <div class="target">
    </div>
    <div class="target">
    </div>
    <div class="target">
    </div>
    <div class="target">
    </div>
    <div class="target">
    </div>
    <div class="target">
        <img src="/placeholder/lg.png" class="inner">
    </div>
    <div class="target">
        <div class="inner">
            <img src="/placeholder/lg.png" class="img">
        </div>
    </div>
    <img src="/placeholder/lg.png" class="target">
</div>
`

Main.story = {
  name: '基础用法'
}