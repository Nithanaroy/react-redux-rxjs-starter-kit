import Home from "./Home";
import { connect } from "react-redux";
import { savePerson, updatePersonProp } from "./HomeActions";

const mapStateToProps = ( state ) =>
  ({ "person": state.person });

const mapDispatchToProps = dispatch =>
  ({
    onNewPerson ( person ) {
      dispatch( savePerson( person ) );
    },
    onPersonPropChange ( prop, newValue ) {
      dispatch( updatePersonProp( prop, newValue ) );
    }
  });

const Container = connect( mapStateToProps, mapDispatchToProps )( Home );
export default Container;
