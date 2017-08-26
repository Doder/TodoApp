import React, {Component} from 'react';

export default class AddTodo extends Component{
  render(){
    return(
      <div className="centered">
      <div className="row">
      <div className="col-md-1">
        <p>Show: </p>
      </div>
        <div className="col-md-11">
          <a href="#">All</a>
          <a href="#">Active</a>
          <a href="#">Completed</a>
        </div>
      </div>
      </div>
    );
  }
}
