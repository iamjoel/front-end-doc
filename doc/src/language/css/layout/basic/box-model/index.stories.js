import doc from './README.md'
import boxModelImg from './box-model.png'

export default { 
  title: 'CSS/布局/基础/2 盒模型',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => ({
  data() {
    return {
      boxModelImg
    }
  },
  template: `
<div>
  <img :src="boxModelImg">
</div>
`})

Main.story = {
  name: '基础用法'
}

export const MarginCollapse = () => ({
  template: `
<div>
  <div style="margin-bottom: 10px;">margin-bottom: 10px</div>
  <div style="margin-top: 10px;">margin-top: 10px</div>
</div>
`})

MarginCollapse.story = {
  name: 'Margin 折叠'
}