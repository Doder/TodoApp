import React, {Component} from 'react';

export default class AddTodo extends Component{
  render(){
    return(
      <div className="centered">
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Add Todo" aria-label="Add Todo"/>
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Add</button>
            </span>
          </div>
        </div>
        </div>
        </div>
    );
  }
}
