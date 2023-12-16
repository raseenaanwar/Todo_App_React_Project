import React, { Component, useCallback, useState } from 'react';

import './TodoApp.css';

export default class TodoApp extends Component {
  state = {
    input: '',
    items: [],
    editingIndex: null,
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input, editingIndex } = this.state;

    if (editingIndex !== null) {
  
      const updatedItems = [...this.state.items];
      updatedItems[editingIndex] = input;
      this.setState({
        items: updatedItems,
        input: '',
        editingIndex: null,
      });
    } else {
      
      this.setState({
        items: [...this.state.items, input],
        input: '',
      });
    }
  };

  deleteItem = (index) => {
    this.setState({
      items: this.state.items.filter((data, i) => i !== index),
    });
  };

  editItem = (index) => {
    const itemToEdit = this.state.items[index];
    this.setState({
      input: itemToEdit,
      editingIndex: index,
    });
  };

  render() {
    const { input, items } = this.state;

    return (
      <div className='todo-conatiner'>
        <h1>TodoApp</h1>
        <form className='input-section' onSubmit={this.storeItems}>
          <input
            value={input}
            onChange={this.handleChange}
            type='text'
            placeholder='Enter todo '
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className='fa-solid fa-trash'
                onClick={() => this.deleteItem(index)}
              ></i>
              <i
                className='fas fa-edit'
                onClick={() => this.editItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

