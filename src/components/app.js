import React, { Component } from 'react';
import AddTodo from './add-todo';
import SearchBar from './search-bar';
import TaskList from './task-list';
import Filters from './filters';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <SearchBar/>
        <TaskList/>
        <Filters/>
      </div>
    );
  }
}
