import C from "../constants";
import { combineReducers } from "redux";

export const person = ( state = {}, action ) => {
  switch( action.type ){
  case C.ADD_PERSON:
    return action.payload;
  case C.UPDATE_PERSON_PROP:
    return {
      ...state,
      [action.payload.prop]: action.payload.newValue
    };
  default:
    return state;
  }
};

export const loading = ( state = false, action ) => {
  switch( action.type ){
  case C.SEARCH_ENTITIES_LOADING :
    return action.payload;
  default:
    return state;
  }
};

export const errors = ( state = [], action ) => {
  switch( action.type ){
  case C.ADD_ERROR :
    return [
      ...state,
      action.payload
    ];
  case C.CLEAR_ERROR :
    return state.filter( ( message, i ) => i !== action.payload );
  default:
    return state;
  }
};

export const searchResults = ( state = [], action ) => {
  switch( action.type ){
  case C.RECEIVED_SEARCH_ENTITIES :
    return action.payload;
  case C.CANCEL_SEARCH:
    return []; // clear existing results
  default:
    return state;
  }
};

export default combineReducers({
  person,
  errors,
  loading,
  searchResults
});