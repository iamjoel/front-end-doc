export default { title: 'HTML/占位图(失效了)' }

export const Main = () => `
  <img src="http://via.placeholder.com/200x100" alt="">
`

Main.story = {
  name: '基础用法'
}

export const WithColor = () => `
  <img src="http://via.placeholder.com/200/f60/fff" alt="">
`

WithColor.story = {
  name: '自定义文字颜色和背景色'
}

export const WithText = () => `
  <img src="http://via.placeholder.com/200?text=Hello+world!" alt="">
`

WithText.story = {
  name: '自定义文字'
}