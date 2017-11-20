import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.less";
// import Cancel from "react-icons/lib/fa/close";

class Search extends Component{
  constructor ( props ) {
    super( props );
    this.state = { "query": "" };
    this.searchEntities = this.searchEntities.bind( this );
    this.cancelSearch = this.cancelSearch.bind( this );
  }
  searchEntities ( e ) {
    this.setState({ "query": e.target.value });
    this.props.doSearch( e.target.value );
  }
  cancelSearch () {
    this.setState({ "query": "" });
    this.props.doCancelSearch();
  }
  render () {
    let { searchResults } = this.props;
    return (
      <div className="search">
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
            <input className="uk-input uk-form-width-large" type="text" autoFocus
              value={this.state.query} onChange={this.searchEntities} />
          </div>
        </div>
        {searchResults.length > 0
                  && <div className="search-result">
                    <p><strong>{searchResults.length} matching results found!</strong></p>
                    {searchResults.map( ( result, i ) => <p key={i} className="search-result-item">{result.name}</p> )}
                  </div>
        }
        {/* <Cancel xlinkTitle="Cancel and Clear search" onClick={this.cancelSearch} className="cancel-btn" /> */}
      </div>
    );
  }
}

Search.defaultProps = {
  "searchResults": [],
  "doSearch": f => f,
  "doCancelSearch": f => f
};

Search.propTypes = {
  "searchResults": PropTypes.array,
  "doSearch": PropTypes.func,
  "doCancelSearch": PropTypes.func
};

export default Search;