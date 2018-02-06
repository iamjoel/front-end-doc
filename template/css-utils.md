## 用 CSS 工具类来快速做页面
在做页面的过程中，给元素添加样式，常规做法是给元素加个类名。起个合适的类名，还满难的。如果我们把常用的样式定义成一个个工具类名，那么很多情况，我们只需要在元素上加工具类名，而不需要专门取名字。例如，做一个图文的列表，我们以前可能会这么写：
```

```

用工具类名的方式，这么写：
```

```

这样写的优点：
* 减少起类名的次数。从而提高做页面的速度。
* 写好类名后，样式基本已满足要求了。减少总的 CSS 代码量。

缺点：
* 一个元素可能会用很多个类名,代码上有点丑。

注意：这种写法适用写不可复用的页面。写组件，还是用给元素加类名的方式比较好。

## 支持的工具类
我这边定义了常见的工具类，源码见[这里]()。具体支持如下

* 布局
  * Flex 布局。
  * 盒模型： border-box,content-box。
  * pos-r 相对定位。
  * 非块级元素的水平居中，居右。
* 尺寸
  * margin 和 padding 的0~20px的值。
  * 宽度 100%。
* 字。大小，粗细，字体，行高，颜色。
* 文本
  * 超出加省略号。
  * 禁止选择文本。
* 背景
  * 灰色背景。
  * 背景图尺寸：cover,contain, 100%。
* 边框。指定颜色边框。
* 圆角。不同大小的圆角。

## 约定
* 类名规则是`样式单词的首字母缩写-值`。如
  * mb-10 -> margin-bottom: 10px
  * ta-c -> text-align: center
  * 特例
    * ly 布局相关相关的。
    * pos -> position， border-box, content-box。 
* 尺寸用 xl, lg, md, sm, xm 分别代表 特大，大，中等，小，特小。
* 颜色深浅，分别用 dark，light。如
  * c-light-grey
* 类名的值采用 [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)(巴科斯范式)。常见符号的意义，如下
  * `<>`: 必选项。
  * `[]` : 可选项。
  * `{}`: 内包含的为可重复0至无数次的项。
  * `|`: 分隔不同选项。

## 书写CSS的顺序
从外而内，从垂直（上到下）到水平（左到右），从布局(大小)到细节（颜色，字的粗细）。

* position,z-index,top,bottom,left,right。工具类:
  * `pos-r`
* margin。工具类:
  * `m[t|b|l|r]-<0|5|10|15|20>[rem]`
* 盒模型。工具类:
  * `border-box`, `content-box`
* border。工具类:
  * `b[t|b|l|r|v|h]`
* border-radius 圆角
  * `br-<lg|md|sm|round>`
* padding。工具类:
  * `p[t|b|l|r]-<0|5|10|15|20>[rem]`
* background。工具类:
  * `bgc-grey`
  * `bgz-<cover|contain|100>`
* display。 flex,block...
  * `ly`
* height。工具类:
  * `h-100`: height: 100%
* flex-wrap
  * `ly-multi` 多行
* align-items, align-self 垂直对齐
  * `ly-<t|m|b>`
* line-height
  * `lh-<lg|md|sm>`
* width
  * `w-50,w-100` : 对应 `width: 50%,width: 100%`
* flex-grow
  * `lyi-fill`
* justify-content 水平对齐
  * `ly-<j|c|a|r>`
* text-align 文本水平对齐
  * `ta-<c|r>`
* text
  * `t-ddd` :单行文本超出加省略号。
  * `t-no-select`：禁止选择文本。
* font
  * `fz-<xg|lg|md|sm|xs>`
  * `fw-<b|l>`
  * `ff-<yahei|hei|song>`
  * `c-<grey|light-grey>`