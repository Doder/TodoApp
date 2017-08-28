import React, { Component } from 'react';
import AddTodo from '../containers/add-todo';
import SearchBar from './search-bar';
import TaskList from '../containers/task-list';
import Filters from '../containers/filters';

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
