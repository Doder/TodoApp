import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchStatus} from '../actions';

class TaskList extends Component{
  renderTasks(){
    if(!this.props.tasks) return <p>There are no more tasks.</p>;
    return this.props.tasks.map((task) => {
      const className = `list-group-item ${!task.isActive ? "list-group-item-success" : ""}`;
      return <li className={className} onClick={()=> this.props.switchStatus(task)} key={task.id}>{task.title}</li>;
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
  return({
    tasks: state.tasks,
    activeTask: state.activeTask
  });
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({switchStatus}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
