import React, { Component } from 'react';
import './App.css';

const ENTER_KEY = 13
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: 1,
        text: '测试',
        isComplete: false
      }],
      newTodo: ''
    };
  }

  handlerInput(event) {
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
          isComplete: false
        })
      });
      this.setState({newTodo: ''});
    }
  }

  handleChange (event) { // 很重要，否则输入框内容不会变...
    this.setState({newTodo: event.target.value});
  }

  render() {
    var list = this.state.list.map(item => {
      return <li key={item.id}>{item.text}</li>
    })
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange.bind(this)} onKeyDown={this.handlerInput.bind(this)}  value={this.state.newTodo}/>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default App;
