import React, { Component } from 'react';
import './App.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import TodoItem from './TodoItem.js'

const ENTER_KEY = 13
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: 1,
        text: '测试',
        isCompleted: false,
        isEditing: false
      }],
      newTodo: ''
    };
  }
  // 绑定 this public class fields syntax: https://babeljs.io/docs/plugins/transform-class-properties/
  handlerInput = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newTodo.trim();

    if (val) {
      this.setState({
        list: this.state.list.concat({
          id: Date.now(),
          text: val,
          isCompleted: false,
          isEditing: false,
        })
      });
      this.setState({newTodo: ''});
    }
  }

  handleChange = (event) => { // 很重要，否则输入框内容不会变...
    this.setState({newTodo: event.target.value});
  }

  render() {
    var list = this.state.list.map(item => {
      return <TodoItem key={item.id} todo={item} />
    })

    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} onKeyDown={this.handlerInput}  value={this.state.newTodo}/>
        <ul className="todo-list">
          {list}
        </ul>
      </div>
    );
  }
}

export default App;
