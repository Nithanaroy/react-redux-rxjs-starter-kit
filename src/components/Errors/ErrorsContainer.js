import Errors from "./Errors";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => ({ "errors": state.errors });

const Container = connect( mapStateToProps )( Errors );
export default Container;
