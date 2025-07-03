import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component<any, any> {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    dueDate: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || '',
    dueDate: this.props.dueDate || ''
  }

  handleSubmit = (e: any) => {
    const text = this.state.text.trim();
    const dueDate = this.state.dueDate.trim();
    if (e.which === 13) {
      this.props.onSave(text, dueDate);
      if (this.props.newTodo) {
        this.setState({ text: '', dueDate: '' });
      }
    }
  }

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBlur = (e: any) => {
    if (!this.props.newTodo) {
      // For text input, save on blur
      if (e.target.name === "text") {
        this.props.onSave(this.state.text.trim(), this.state.dueDate.trim());
      }
    }
  }

  render() {
    return (
      <>
        <input className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
          type="text"
          name="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
        {this.props.editing || this.props.newTodo ? (
          <input
            className={classnames({ edit: this.props.editing, 'new-todo-date': this.props.newTodo })}
            type="text"
            name="dueDate"
            placeholder="Due Date"
            value={this.state.dueDate}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit} // Also save on Enter in due date field
          />
        ) : null}
      </>
    )
  }
}
