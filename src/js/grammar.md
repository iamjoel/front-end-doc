# JS 语法
## 注释
```
// 这是单行注释

/*
 这是
 多行
 注释
*/
```

### 变量
变量声名
```
var a
var b = 3 // 在声明变量的同时赋值
```


给变量赋值
```
var c;
c = 5
```

## 条件
```
var a = 3;
if(a > 1){
  
} else if(a < 0){
  
} else {
  
}

if(a && b) {

} else if (c || d && e) {

}

switch(a){
  case 1:
    // doSth
    break;
  case 2:
    // doSth
    break;
  case 3:
    // doSth
    break;
  default:
    break;
}
```

## 循环
```
var i = 0;
while(i < 10){
  // doSth
  i++;
  if(i % 5 == 0) {
    break;
  }
}

for(var i = 0; i < 10; i++){
  // doSth
}
```

## 函数
定义函数
```
// 不带参数的
function getInfo(){
  // doSth
};
// 带参数的
function getUser(id, other){
  // doSth
};
// 获取不定参数
function add(){
  var sum = 0;
  var argsLen = arguments.length;
  for(var i = 0; i < argsLen; i++){
    sum = sum + arguments[i];
  }
  return sum;
}

// 匿名函数。定义完后立即调用
(function(){
  // doSth
})()

// 函数表达式
var getName = function() {
  // doSth
}

```


函数调用
```
getInfo();
getUser(1, {});
add(1, 2);
add(1, 2, 3);


```
