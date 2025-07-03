import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

type Props = any;

export default class TodoItem extends Component<Props, Props> {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id: number, text: string, dueDate?: string) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text, dueDate)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       dueDate={todo.dueDate}
                       editing={this.state.editing}
                       onSave={(text: string, dueDate?: string) => this.handleSave(todo.id, text, dueDate)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => {
                  completeTodo(todo.id)
                 }} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
            {todo.dueDate && <span className="due-date"> (Due: {todo.dueDate})</span>}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
