import React, {Component} from 'react';
import {connect} from 'react-redux';

class TaskList extends Component{
  renderTasks(){
    if(!this.props.tasks) return <p>There are no more tasks.</p>;
    return this.props.tasks.map((task) => {
      return <li className="list-group-item" key={task.id}>{task.title}</li>
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
    tasks: state.tasks
  });
}

export default connect(mapStateToProps)(TaskList);
