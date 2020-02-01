import doc from './README.md'

export default { 
  title: 'DOM&BOM/History API',
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