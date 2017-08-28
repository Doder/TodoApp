import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions';

class AddTodo extends Component{

  renderInput(field){
    const className = `form-group ${field.meta.error && field.meta.submitFailed ? "has-danger" : ""}`;

    return(
      <div className={className}>
        <input type="text" className="form-control" placeholder="Add Todo" {...field.input} />
      </div>
    );
  }

  renderErrors(field){
    if(field.meta.submitFailed && field.meta.error){
      return(
          <div className="alert alert-danger" role="alert">
            {field.meta.error}
          </div>
      );
    }
    return(<div></div>);
  }

  onSubmit(values){
    this.props.addTask(values.title);
    values.title = "";
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <div className="centered">
      <div className="row">
        <div className="col-md-12">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="input-group">
            <Field
              name="title"
              component={this.renderInput}
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="submit">Add</button>
            </span>
          </div>
        </form>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <Field
          name="title"
          component={this.renderErrors}
        />
        </div>
        </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTask : addTask }, dispatch);
}

function validate(values) {

  const errors = {};

  if(!values.title || !values.title.match(/^[A-Z][0-9a-zA-Z ]*$/g)){
    errors.title = "First letter must be capital. Symbols aren't allowed.";
  }

  return errors;
}


export default reduxForm({
  validate,
  form: "NewTaskForm"
})(connect(null, mapDispatchToProps)(AddTodo));
