import doc from './README.md'

export default { 
  title: 'DOM&BOM/事件(Event)',
  parameters: {
    notes: doc,
  }
}

export const Main = () => `
<div>
  见 Notes
</div>
`

Main.story = {
  name: '基础用法'
}