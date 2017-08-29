import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    e.preventDefault();
    this.setState({term : e.target.value});
    const {term} = this.state;
    if(term.length > 1){
      console.log(term);
      //make search
    }

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
