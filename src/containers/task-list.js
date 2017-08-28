import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchStatus, fetchAllTasks} from '../actions';

class TaskList extends Component{
  ComponentDidMount(){
    this.props.fetchAllTasks(this.props.tasks);
  }
  renderTasks(){
    if(!this.props.filteredTasks) return <p>There are no more tasks.</p>;
    return this.props.filteredTasks.map((task) => {
      const className = `list-group-item ${!task.isActive ? "list-group-item-success" : ""}`;
      return <li className={className} onClick={()=> this.props.switchStatus(task, this.props.activeFilter)} key={task.id}>{task.title}</li>;
    });
  }

  render(){
    return(
      <div className="centered">
      <div className="row">
      <div className="col-md-12">
      <ul className="list-group">
        {this.renderTasks()}
      </ul>
      </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks,
    filteredTasks: state.filteredTasks,
    activeTask: state.activeTask,
    activeFilter: state.activeFilter
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({switchStatus, fetchAllTasks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
