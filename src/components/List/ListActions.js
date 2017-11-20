import C from "../../constants";

export const fetchPeople = ( skip, limit ) => async dispatch => {
  const url = `/api/v1/person?skip=${skip}&limit=${limit}`;
  let peopleResponse = await fetch( url );
  let peopleJson = await peopleResponse.json();
  dispatch({
    "type": C.REPLACE_PEOPLE,
    "payload": peopleJson.result
  });
};