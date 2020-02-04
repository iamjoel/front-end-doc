import doc from './README.md'

export default { 
  title: 'DOM&BOM/事件(Event)',
  parameters: {
    notes: doc,
    previewTabs: {
      'storybook/docs/panel': {hidden: true}
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