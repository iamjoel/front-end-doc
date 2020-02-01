# History API
History API 可以修改页面的 URL ，同时不刷新页面。

## 后退
```js
history.back() // history.go(-1) 一样的效果
```

## 前进
```js
history.forward()
```

## 进入某个页面
```js
history.pushState(data, title, url)
history.replaceState(data, title, url) // 当前被替换的页面不会记入历史
```

## 事件
```js
// 后退或前进时会触发
window.addEventListener('popstate', function(e) {
  // e.state 为传递的数据。
})
```

## 更多 
* [Using the HTML5 History API](https://css-tricks.com/using-the-html5-history-api/)