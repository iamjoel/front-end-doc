# [React](https://reactjs.org/docs/handling-events.html)
## JSX
```
var element = <h1 className="title">一号标题</h1>
```

## 最基本的结构
```
React.render(
  <div>xxx</div,
  document.getElementById('example')
)
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

注意与原生的写法的差异，驼峰形式的。如
* onKeyup
* onChange

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

// 不会去修改props
```

## 输入框值的绑定
```

<input
  value={this.state.xx}
  onChange={this.handleChange} />

// 自动绑定 this
handleChange = (e) => {
  this.setState({xx: e.target.value})
}

或者
constructor(props) {
  super(props)
  this.handleChange = this.handleChange.bind(this)
}

handleChange(e) {
  this.setState({xx: e.target.value})
}
```


## 循环列表要要加 Key
```
<li key={xxx}>
    
</li>
```

## 条件渲染
```
{isShowHeader && <Header />}
```





## 生命周期
constructor
```
constructor(props) {
  super(props)
  // this.state = {...}
}
```

componentDidMount

componentWillUnmount

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

## 将组件内部内容放入组件
类似 slot。将组件内所有内容加入父组件
```
// 父组件
<div>{props.children}</div>
```

多块内容。组件做为属性传入
```
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

## 父子组件交互
父组件在子组件的属性上传函数。当子组件要通知父组件某值时，调用对应的函数。父组件的函数里可能会改 state，而该state 可能做为 props 传个子组件，触发子组件的 render 。






