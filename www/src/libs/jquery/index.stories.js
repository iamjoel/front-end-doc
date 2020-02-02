import doc from './README.md'
export default { 
  title: '第三方库/JQuery',
  parameters: {
    notes: doc,
    previewTabs: {
      'storybook/docs/panel': {hidden: true}
    }
  }
}

export const Main = () => '<div></div>'

Main.story = {
  name: '基础用法'
}