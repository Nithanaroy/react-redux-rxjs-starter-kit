import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "../Search/SearchContainer";

class List extends Component{
  constructor ( props ) {
    super( props );
  }
  componentDidMount () {
    this.props.onFetchPeople();
  }
  render () {
    return (
      <div className="list">
        <Search />
        {this.props.people.map( ( person, i ) =>
          <p key={i}>{person.displayName}</p>
        )}
      </div>
    );
  }
}

List.propTypes = {
  "people": PropTypes.array,
  "onFetchPeople": PropTypes.func
};

export default List;