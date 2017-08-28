import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchActiveTasks, fetchCompletedTasks, fetchAllTasks} from '../actions';

class Filters extends Component{
  render(){
    return(
      <div className="centered">
      <div className="row">
      <div className="col-md-1">
        <p>Show: </p>
      </div>
        <div className="col-md-11">
          <a onClick={() => this.props.fetchAllTasks(this.props.tasks)}>All</a>
          <a onClick={(e) => this.props.fetchActiveTasks(this.props.tasks)}>Active</a>
          <a onClick={(e) => this.props.fetchCompletedTasks(this.props.tasks)}>Completed</a>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps({tasks}){
  return { tasks };
}

export default connect(mapStateToProps, {fetchActiveTasks, fetchCompletedTasks, fetchAllTasks})(Filters);
