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
          <a className={this.props.activeFilter === "ALL" ? "active" : ""} onClick={() => this.props.fetchAllTasks(this.props.tasks)}>All</a>
          <a className={this.props.activeFilter === "ACTIVE" ? "active" : ""} onClick={() => this.props.fetchActiveTasks(this.props.tasks)}>Active</a>
          <a className={this.props.activeFilter === "COMPLETED" ? "active" : ""} onClick={() => this.props.fetchCompletedTasks(this.props.tasks)}>Completed</a>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps({tasks, activeFilter}){
  return { tasks, activeFilter };
}

export default connect(mapStateToProps, {fetchActiveTasks, fetchCompletedTasks, fetchAllTasks})(Filters);
