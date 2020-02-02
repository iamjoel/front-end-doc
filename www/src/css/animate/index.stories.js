import './style.css'

export default { 
  title: 'CSS/动画',
  parameters: {
    previewTabs: {
      'storybookjs/notes/panel': {hidden: true}
    }
  }
}

export const Main = () => `
<div>
  <div class="block anim-bounce"></div>
</div>
`

Main.story = {
  name: '基础用法'
}