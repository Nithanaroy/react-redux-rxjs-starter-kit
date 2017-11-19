import Search from "./Search";
import { connect } from "react-redux";
import { searchEntities, cancelSearch } from "./SearchActions";

const mapStateToProps = ( state ) => ({ "searchResults": state.searchResults });

const mapDispatchToProps = dispatch =>
  ({
    doSearch ( searchTerm ) {
      dispatch( searchEntities( searchTerm ) );
    },
    doCancelSearch () {
      dispatch( cancelSearch() );
    }
  });

const Container = connect( mapStateToProps, mapDispatchToProps )( Search );
export default Container;
