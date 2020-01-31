export default { title: '常用网站导航' }
import './style.css'
import main from './main.js'

export const Main = () => ({
  mounted() {
    main()
  },
  template: `
<div class="container">
  <h1>前端常用网站导航 <!-- (<a href="#tip" class="ignore-search">使用说明</a>) --></h1>
  <ul class="nav">
    <li class="nav__list-wrap">
      <h2 class="nav__header">API</h2>
      <ul class="nav__item-list">
        <li class="nav__item"><a href="https://devhints.io/">Cheetsheet</a></li>
        <li class="nav__item"><a href="https://iamjoel.github.io/front-end-codes/template/">代码库</a></li>
        <li class="nav__item"><a href="https://iamjoel.github.io/front-end-codes/tool/dist/index.html">代码片段</a></li>
        <li class="nav__item"><a href="https://github.com/iamjoel/css-utils-collection">CSS 工具类</a></li>
        <br>
        <li class="nav__item"><a href="http://api.jquery.com/">jQuery</a></li>
        <li class="nav__item"><a href="https://jqueryui.com/" data-shortcut="i">jQuery UI</a></li>
        <br>
        <li class="nav__item"><a href="http://cn.vuejs.org/api/">Vue.js</a></li>
        <li class="nav__item"><a href="http://router.vuejs.org/zh-cn/index.html" data-shortcut="y">vue-router</a></li>
        <li class="nav__item"><a href="http://vuex.vuejs.org/zh-cn/index.html" data-shortcut="x">vuex</a></li>
        <li class="nav__item"><a href="https://github.com/mzabriskie/axios">axios</a></li>
        <li class="nav__item"><a href="https://github.com/vuejs/vue-resource/blob/master/docs/http.md" data-shortcut="h">vue-resource</a></li>
        <br>
        <li class="nav__item"><a href="https://element.eleme.cn/#/zh-CN/component/installation">Element 1.4</a></li>
        <li class="nav__item"><a href="https://www.youzanyun.com/zanui/vant#/zh-CN/component/icon">Vant</a></li>
        <li class="nav__item"><a href="http://mint-ui.github.io/docs/#/zh-cn2">Mint UI</a></li>
        <br>
        <li class="nav__item"><a href="https://reactjs.org/docs/hello-world.html">React</a></li>
        <br>
        <li class="nav__item"><a href="https://vuxjs.gitbooks.io/vux/content/" data-shortcut="z">vux</a></li>
        <br>
        <li class="nav__item"><a href="http://underscorejs.org/">Underscore.js</a></li>
        <li class="nav__item"><a href="http://momentjs.com/" data-shortcut="false">Moment.js</a></li>
        <br>
        <li class="nav__item"><a href="http://v4.bootcss.com/">Bootstrap4</a></li>
        <li class="nav__item"><a href="http://v3.bootcss.com/">Bootstrap3</a></li>
        <li class="nav__item"><a href="http://v2.bootcss.com/" data-shortcut="2">Bootstrap2</a></li>
        <br>
        <li class="nav__item"><a href="http://compass-style.org/reference/compass/">Compass</a></li>
        <li class="nav__item"><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html">Sass</a></li>
        <br>
        <li class="nav__item"><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" data-shortcut="e">Flex 布局教程：语法篇</a></li>
      </ul>
    </li>
    <li class="nav__list-wrap">
      <h2 class="nav__header">工具</h2>
      <ul>
        <li class="nav__item"><a href="https://unpkg.com/" data-shortcut="k" title="npm">unpkg</a></li>
        <li class="nav__item"><a href="http://regexr.com/" data-shortcut="r">正则在线工具</a></li>
        <li class="nav__item"><a href="https://jex.im/regulex/" data-shortcut="3">regulex:正则可视化</a></li>
        <li class="nav__item"><a href="http://jsonlint.com/" data-shortcut="l">jsonlint</a></li>
        <br>
        <li class="nav__item"><a href="http://webpack.github.io/docs/">webpack</a></li>
        <br>
        <li class="nav__item"><a href="https://htmlpreview.github.io/">GitHub HTML预览</a></li>
        <li class="nav__item"><a href="https://rawgit.com/" data-shortcut="1">RawGit</a></li>
      </ul>
    </li>
    <li class="nav__list-wrap">
      <h2 class="nav__header">资源</h2>
      <ul>
        <li class="nav__item"><a href="https://unsplash.com/" data-shortcut="p">Unsplash：免费图片</a></li>
        <li class="nav__item"><a href="http://www.iconfont.cn/">Iconfont</a></li>
      </ul>
      </li>
      <li class="nav__list-wrap">
      <h2 class="nav__header">文档</h2>
      <ul>
        <li class="nav__item"><a href="https://developer.mozilla.org/zh-CN/">MDN</a></li>
        <li class="nav__item"><a href="http://tympanus.net/codrops/css_reference/" data-shortcut="false">CSS 规则参考</a></li>
      </ul>
      </li>
      
  </ul>
  <div class="auto-complate">
    <div class="auto-complate__search-area">
      <input type="text" class="auto-complate__input">
    </div>
    <ul class="auto-complate__content"></ul>
  </div>
  <div id="tip">
    <h2>使用说明</h2>
    <ul>
      <li>用快捷键来打开链接。橘黄色的字母为链接的快捷键。</li>
      <li>
        <strong>用搜索框搜索。</strong>
        <ul>
          <li>打开搜索框：按 f </li>
          <li>搜索：在模糊搜索框中输入内容，会列出页面上所有链接的名称或链接地址中包含搜索框的值的链接</li>
          <li>打开链接：用回车或点击来打开链接</li>
          <li>关闭搜索框：用ESC或点击非搜索框区域</li>
        </ul>
      </li>
    </ul>
  </div>
</div>`
})

Main.story = {
  name: '文档网站'
}