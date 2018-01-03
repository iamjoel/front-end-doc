# [React](https://reactjs.org/docs/handling-events.html)
## JSX
```
var element = <h1 className="title">一号标题</h1>
```

### 使用表达式
```
var imgSrc = 'xxx'
var element = <img src={imgSrc} />
```

### 事件处理
```
var element = <button onClick="doSth"></button>
// 传递参数
var element2 = <button onClick="{(e) => this.deleteRow(id, e)}"></button>

```

注意与原生的写法的差异，驼峰形式的。

### 条件渲染
```
{unreadMessages.length > 0 &&
  <h2>
    You have {unreadMessages.length} unread messages.
  </h2>
}
```

## state 操作

## 生命周期

## 组件



