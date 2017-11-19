import C from "../../constants";
import $ from "jquery";
import { addError } from "../Errors/ErrorsActions";

export const updatePersonProp = ( prop, newValue ) => {
  return {
    "type": C.UPDATE_PERSON_PROP,
    "payload": {
      prop,
      newValue
    }
  };
};

export const savePerson = person => dispatch => {
  // TODO: validation
  $.ajax({
    "url": "/api/v1/person",
    "method": "POST",
    "contentType": "application/json",
    "data": JSON.stringify( person ),
    "success": function ( response ) {
      dispatch({
        "type": C.ADD_PERSON,
        "payload": response.result
      });
    },
    "error": function () {
      dispatch( addError( "Server error" ) );
    }
  });
};