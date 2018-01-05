import React, { Component } from 'react';
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

  render() {

    return (
      <li className={this.getClassNames()}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.todo.completed}
              onChange={this.props.onToggle}
            />
            <label onDoubleClick={this.handleEdit}>
              {this.props.todo.title}
            </label>
            <button className="destroy" onClick={this.props.onDestroy} />
          </div>
          <input
            ref="editField"
            className="edit"
            value={this.state.editText}
            onBlur={this.handleSubmit}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </li>
    )
  }
  getClassNames = () => {
    var res = []
    if(this.props.todo.isCompleted) {
      res.push('completed')
    }
    if(this.props.todo.isEditing) {
      res.push('edting')
    }

    return res.join(' ')
  }
  handleEdit = () => {

  }
}
export default App;
