import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions';

class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state = { newTask : ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.props.addTask(this.state.newTask);
  }
  handleChange(e){
    e.preventDefault();
    this.setState({newTask: e.target.value});
  }
  render(){
    return(
      <div className="centered">
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.newTask} placeholder="Add Todo" aria-label="Add Todo" onChange={this.handleChange}/>
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this.handleClick}>Add</button>
            </span>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTask : addTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodo);
