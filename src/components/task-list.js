import React, {Component} from 'react';

export default class TaskList extends Component{
  render(){
    return(
      <div className="centered">
      <div className="row">
      <div className="col-md-12">
      <ul className="list-group">
        <li className="list-group-item">Task1</li>
        <li className="list-group-item">Task2</li>
        <li className="list-group-item">Task3</li>
      </ul>
      </div>
      </div>
      </div>
    );
  }
}
