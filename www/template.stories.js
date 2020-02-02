import doc from './README.md'

export default { 
  title: 'x/xx',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      'storybookjs/notes/panel': {hidden: true},
      'canvas': {hidden: true}, // 交互Demo
      'storybook/docs/panel': {hidden: true},
    }
  }
}

export const Main = () => `
<div>
  
</div>
`

Main.story = {
  name: '基础用法'
}