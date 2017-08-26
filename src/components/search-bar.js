import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <div className="centered" id="search-bar">
      <div className="row">
        <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Search" aria-label="Search"/>
        </div>
        </div>
        </div>
    );
  }
}
