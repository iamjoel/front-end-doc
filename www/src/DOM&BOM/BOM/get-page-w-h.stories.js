export default { 
  title: 'DOM&BOM/获取页面的宽高',
}

export const Main = () => ({
  data() {
    return {
      body: document.body,
      window
    }
  },
  template: `
<div>
  body在浏览器内显示的区域宽度: {{body.clientWidth}} <br>
  body总宽度。如果有滚动条的话，会包含未显示的部分: {{body.offsetWidth}} <br>
  浏览器内页面可用宽度(值等于 body.clientWidth + 滚动条宽度): {{window.innerWidth}} <br>
  浏览器宽度: {{window.outerWidth}} <br>
  <hr/>
  高度只是 Width 改成 Height <br>
  window.outerHeight 的高度: 为 window.innerHeight + 工具栏和地址栏的高度
</div>
`
})

Main.story = {
  name: '基础用法'
}