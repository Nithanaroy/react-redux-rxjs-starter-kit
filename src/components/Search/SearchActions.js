import C from "../../constants";

export function searchEntities ( searchTerm ) {
  return {
    "type": C.SEARCH_ENTITIES,
    "payload": searchTerm
  };
}

export function cancelSearch ( ) {
  return { "type": C.CANCEL_SEARCH };
}

export function receivedSearchEntities ( searchResults ) {
  return {
    "type": C.RECEIVED_SEARCH_ENTITIES,
    "payload": searchResults
  };
}

export function searchEntitiesLoading ( loading ) {
  return {
    "type": C.SEARCH_ENTITIES_LOADING,
    "payload": loading
  };
}