import doc from './README.md'
export default { 
  title: '第三方库/JQuery',
  parameters: {
    notes: doc,
  }
}

export const Main = () => '<div>见 Notes</div>'

Main.story = {
  name: '基础用法'
}