## CSS 工具类
定义的了常用的一些规则，来标准化，快速地做页面。

## 支持的工具类
* 布局
  * Flex 布局
  * 盒模型 border-box,content-box
  * pos-r 相对定位
  * 非块级元素的水平居中，居右
* 尺寸
  * margin 和 padding 的0~20的值。如 pl-5,m-20。
* 字
  * 大小
  * 粗细
  * 字体
  * 行高
  * 颜色：不同值
* 文本
  * 超出加省略号
  * 禁止文本选择
* 背景
  * 背景灰
  * 背景图尺寸：cover，contain，
* 边框
* 圆角
  * 大中小尺寸的圆角
  * 圆形圆角
* 图片
  * 控制图片大小不会弄坏页面

## 约定
* 类名规则是`样式首字母-值`。如
  * mb-10 -> margin-bottom: 10px
  * ta-c -> text-align: center
  * 特例： pos -> position， border-box, content-box。 
* 尺寸用 xl, lg, md, sm, xm 分别代表 特大，大，中等，小，特小。
* 颜色深浅，分别用 dark，light。如
  * c-light-grey


用工具类的优点，少些CSS，灵活，不用想特殊的类名。缺点，类名很长。


## 顺序
从外而内，从垂直（上到下）到水平（左到右），从布局(大小)到细节（颜色，字的粗细）。

* position,top,bottom,left,right。工具类:
  * pos-r
* margin。工具类:
  * m[t|b|l|r]-[0|5|10|15|20][rem]
* 盒模型。工具类:
  * border-box, content-box
* border。工具类:
  * b[t|b|l|r|v|h]
* border-radius 圆角
  * br-[lg|md|sm|round]
* padding。工具类:
  * p[t|b|l|r]-[0|5|10|15|20][rem]
* background。工具类:
  * bgc-grey
  * bgz-[cover|contain|100]
* display。 flex,block...
  * ly
* height。工具类:
  * h-100
* flex-wrap
  * ly-multi 多行
* align-items, align-self 垂直对齐
  * ly-[t|m|b]
* line-height
  * lh-[lg|md|sm]
* width
  * w-100
* flex-grow
  * lyi-fill
* justify-content 水平对齐
  * ly-[j|c|a|r]
* text-align 文本水平对齐
  * ta-[c|r]
* text
  * t-ddd
  * t-no-select
* font
  * fz-[xg|lg|md|sm|xs]
  * fw-[b|l]
  * ff-[yahei|hei|song]
  * c-[grey|light-grey]