# Sublime 前端代码片段
## 使用方式
1. 打开 packages 所在文件夹:`Preferents:Browser Package`。
1. 放入将本仓库代码。`git clone https://github.com/iamjoel/front-end-snippent.git`
1. 打开命令窗口：`ctrl/command + shift + p`，在输入框输入 `el-组件名称`

## 代码片段
* HTML
  * [HTML 模板](html/j-html.sublime-snippet)
  * [占位图](html/j-img-placeholder.sublime-snippet)
  * [Media](html/j-media.sublime-snippet)
* CSS
  * [文字超出省略](html/j-ellipsis.sublime-snippet)
* JavaScript
  * [for 循环](html/j-for.sublime-snippet)
  * [JSON parse](html/j-json-parse.sublime-snippet)
  * [JSON stringify](html/j-json-stringify.sublime-snippet)
  * [localStorage get](html/j-localStorage-get.sublime-snippet)
  * [localStorage set](html/j-localStorage-set.sublime-snippet)
* Vue
  * [vue 页面模板](html/j-vue-template.sublime-snippet)
  * [管理后台 列表页模板](html/j-vue-list.sublime-snippet)
  * [管理后台 列表页 JS 模板](html/j-vue-list-js.sublime-snippet)
  * [管理后台 详情页模板](html/j-vue-update.sublime-snippet)
  * [管理后台 详情页 JS 模板](html/j-vue-update-js.sublime-snippet)
  * 自己的组件
    * Media
* Vue Router(TODO)
* Vuex(TODO)
* [element ui](element-ui)
* [vant ui](vant-ui)

## 让代码片段只指定类型文件能用
```
<scope>文件类型1 [,文件类型2, 文件类型3, ...]</scope>
```

常见的文件类型如下：
```
HTML: text.html
Markdown: text.html.markdown
CSS: source.css
JSON: source.json
Javascript: source.js
```

