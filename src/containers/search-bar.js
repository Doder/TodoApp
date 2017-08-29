import React, {Component} from 'react';
import {doSearch} from '../actions';
import {connect} from 'react-redux';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    e.preventDefault();
    this.setState({term : e.target.value}, () => {
      this.props.doSearch(this.state.term, this.props.filteredTasks);
    });
  }


  render(){
    return(
      <div className="centered" id="search-bar">
      <div className="row">
        <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Search"
            value={this.state.term} onChange={this.handleChange} aria-label="Search"/>
        </div>
        </div>
        </div>
    );
  }
}

function mapStateToProps({filteredTasks}){
  return { filteredTasks };
}

export default connect(mapStateToProps, {doSearch})(SearchBar);
