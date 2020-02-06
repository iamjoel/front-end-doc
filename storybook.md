# 使用 Storybook
用的是 6.0.0-alpha.2 版本。

## 配置文件
项目下的 `.storybook` 文件夹下来放配置文件。
* `main.js` 放 story 的文件的规则和要加载的插件。
* `manager.js` 放配置参数。显示 Tab 的配置。
* `peview.js` 放 story 插件的配置参数。

## 常用结构
story 以 `xx.stories.js` 结尾。

```js
import doc from './README.md'
import './style.css' // 引入 css。 可选。
import sthImg from 'path-to-img.png' // 加载在 html 中要用的相对路径的图片。

export default { 
  title: '', // story 的标题
  parameters: {
    componentSubtitle: '', // 在 docs/panel 显示的子标题
    notes: doc, // notes panel 显示的内容。
    previewTabs: { // 控制头部tab 的消藏，位置等。 6.0.0-alpha.2 才加入的功能。
      'storybookjs/notes/panel': {hidden: true|false},
      'canvas': {hidden: true|false}, // 交互Demo
      'storybook/docs/panel': {hidden: true|false},
    }
  }
}

export const Main = () => ({
  data() {},
  // 还支持 methods,mounted 等 vue 支持的方法。
  template: `
<div>
  
</div>
`})

Main.story = {
  name: '当前Story 标题'
}

```

## 显示 notes panel 的内容
```js
import doc from './README.md'

export default { 
  title: '',
  parameters: {
    notes: doc,
  }
}
```

## 添加分类
title 中用 `'/'` 分割。如
```js
export default { 
  title: '分类1/子分类2/名称',
}
```

## 自定义 Story 名称
```js
export const Main = () => (...)

Main.story = {
  name: '自定义名称'
}
```
## 加载 CSS
```js
import 'path-to-style-file.css'
```

注意：引入的 CSS 文件是全局的。

## 内链到其他 Story
```js
import { withLinks } from '@storybook/addon-links'

export default { 
  title: '',
  decorators: [withLinks],
}

export const Main = () => `
<a
  href="javascript:void(0)" 
  data-sb-kind="CSS/布局/技术/1 Flexbox"
  data-sb-story="Main"
>
  Flex
</a>
`
```

## 常用链接
* [Storybook 官网](https://storybook.js.org)