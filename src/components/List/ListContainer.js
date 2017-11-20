import List from "./List";
import { connect } from "react-redux";
import { fetchPeople } from "./ListActions";

const mapStateToProps = ( state ) =>
  ({ "people": state.people });

const mapDispatchToProps = dispatch =>
  ({
    onFetchPeople () {
      dispatch( fetchPeople() );
    }
  });

const Container = connect( mapStateToProps, mapDispatchToProps )( List );
export default Container;
