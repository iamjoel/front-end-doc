import './style.css'
import doc from './README.md'

export default { 
  title: 'CSS/规则/动画(Animation)',
  parameters: {
    notes: doc,
    previewTabs: {
      'canvas': {hidden: false}, // 交互Demo
      'storybook/docs/panel': {hidden: true},
    }
  }
}

export const Main = () => `
<div class="anim-page">
  <div class="block anim-bounce"></div>
</div>
`

Main.story = {
  name: '基础用法'
}