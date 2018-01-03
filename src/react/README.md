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

## state / props 操作
```
this.state.xxx // get
this.props.xxx // get

this.setState({ // set
  xxx: xxx
})

// state的更新是异步的。
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}))
```

## 列表要加 Keys
```
<li key={xxx}>
    
</li>
```



## 生命周期


## 组件
用纯函数
```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
```

用 Class
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```







