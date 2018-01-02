# JS 常用代码片段
## 设置参数的默认值
```
// || 遇到 true就停止
function getInfo(name) {
  name = name || 'joel'
}
```

## 对象的判断
```
// && 遇到 false 则停止
function getInfo(obj) {
  if(obj && obj.a && obj.a.b) {

  }
}
```

## 数据类型转化
```
// 转化成字符串
10 + '' 

// 转化成数字
parseInt('5', 10)
parseFloat('5')

// 转化成布尔
!!0 // false
```

## 数组筛选
```
var arr = [1, 2, 3]

arr.filter(function(item) {
  return i % 2 === 0
})

arr.filter(item => i % 2 === 0)
```



