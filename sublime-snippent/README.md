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
  * [文字超出省略](css/j-ellipsis.sublime-snippet)
* JavaScript
  * [for 循环](js/j-for.sublime-snippet)
  * [JSON parse](js/j-json-parse.sublime-snippet)
  * [JSON stringify](js/j-json-stringify.sublime-snippet)
  * [localStorage get](js/j-localStorage-get.sublime-snippet)
  * [localStorage set](js/j-localStorage-set.sublime-snippet)
* Vue
  * [vue 页面模板](vue/j-vue-template.sublime-snippet)
  * [管理后台 列表页模板](vue/j-vue-list.sublime-snippet)
  * [管理后台 列表页 JS 模板](vue/j-vue-list-js.sublime-snippet)
  * [管理后台 详情页模板](vue/j-vue-update.sublime-snippet)
  * [管理后台 详情页 JS 模板](vue/j-vue-update-js.sublime-snippet)
  * 自己的组件
    * [Media](vue/my/media)
    * [Media 所有配置](vue/my/media-full)
* Vue Router(TODO)
* Vuex(TODO)
* [element ui](element-ui)
  * [基础组件](element-ui/basic)
    * [图标按钮](element-ui/basic/el-btn-icon.sublime-snippet)
    * [主要按钮](element-ui/basic/el-btn-primary.sublime-snippet)
    * [不同尺寸按钮](element-ui/basic/el-btn-size.sublime-snippet)
    * [文字按钮](element-ui/basic/el-btn-text.sublime-snippet)
    * [不用类型按钮](element-ui/basic/el-btn-type.sublime-snippet)
    * [默认按钮](element-ui/basic/el-btn.sublime-snippet)
    * [图标](element-ui/basic/el-icon.sublime-snippet)
  * [数据](element-ui/data)
    * [分页](element-ui/data/el-pagination.sublime-snippet)
    * [表格](element-ui/data/el-table.sublime-snippet)
  * [表单](element-ui/form)
    * [典型表单](element-ui/form/el-form.sublime-snippet)
    * [多选框](element-ui/form/el-checkbox-define-value.sublime-snippet)
    * [多选框组](element-ui/form/el-checkbox-group.sublime-snippet)
    * [多选框](element-ui/form/el-checkbox.sublime-snippet)
    * [日期选择器](element-ui/form/el-datepicker.sublime-snippet)
    * [计数器](element-ui/form/el-input-number.sublime-snippet)
    * [输入框](element-ui/form/el-input.sublime-snippet)
    * [文本域输入框](element-ui/form/el-textarea.sublime-snippet)
    * [单选框](element-ui/form/el-radio.sublime-snippet)
    * [单选框组](element-ui/form/el-radio-group.sublime-snippet)
    * [选择器](element-ui/form/el-select.sublime-snippet)
    * [远程搜索](element-ui/form/el-select-remote.sublime-snippet)
    * [时间选择器](element-ui/form/el-timepicker.sublime-snippet)
  * [其他](element-ui/others)
    * [对话框](element-ui/others/el-dialog.sublime-snippet)
    * [错误信息](element-ui/others/el-message-error.sublime-snippet)
* [vant ui](vant-ui)
  * 基础组件
    * [默认按钮](vant-ui/vant-button.sublime-snippet)
    * [主要按钮](vant-ui/vant-button-primary.sublime-snippet)
    * [轮播](vant-ui/vant-swipe.sublime-snippet)
  * 表单
    * [输入框](vant-ui/vant-field.sublime-snippet)
    * [文本域](vant-ui/vant-textarea.sublime-snippet)
    * [数字输入框](vant-ui/vant-number.sublime-snippet)
    * [单选框](vant-ui/vant-radio.sublime-snippet)
    * [复选框](vant-ui/vant-checkbox.sublime-snippet)
    * [开关](vant-ui/vant-switch.sublime-snippet)
    * [日期选择](vant-ui/vant-date.sublime-snippet)
    * [时间选择器](vant-ui/vant-time.sublime-snippet)
    * [选择地址](vant-ui/vant-address.sublime-snippet)
  * 弹出框
    * [成功提示](vant-ui/vant-toast-success.sublime-snippet)
    * [失败提示](vant-ui/vant-toast-fail.sublime-snippet)
    * [选择器(Picker)](vant-ui/vant-picker.sublime-snippet)
    * [底部弹出层](vant-ui/vant-popup-bottom.sublime-snippet)
    * [确认删除提示](vant-ui/vant-confirm.sublime-snippet)
    * [弹出框](vant-ui/vant-dialog.sublime-snippet)
    * [弹出框JS](vant-ui/vant-dialog-js.sublime-snippet)
  * 容器
    * [单元格](vant-ui/vant-cell.sublime-snippet)
    * [标签页](vant-ui/vant-tab.sublime-snippet)
* [mobile](mobile)

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

