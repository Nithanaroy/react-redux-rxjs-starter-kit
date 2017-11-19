import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import C from "../constants";
import { searchEntitiesLoading, receivedSearchEntities } from "../components/Search/SearchActions";
import { addError } from "../components/Errors/ErrorsActions";

const DEBOUNCE_TIME = 500;
const DELAY_SERVER_RESP_BY = 5000;
const searchAPI = ( term ) => `/api/v1/search?query=${term}`;

function searchEntitiesEpic ( action$ ) {
  return action$.ofType( C.SEARCH_ENTITIES )
    .debounceTime( DEBOUNCE_TIME ) // ignore multiple requests within this time
    .filter( action => action.payload.trim().length > 0 )
    .switchMap( ({ payload }) => {
      const loading = Observable.of( searchEntitiesLoading( true ) );

      const blockers = Observable.merge(
        action$.ofType( C.CANCEL_SEARCH ),
        action$.ofType( C.NAVIGATE_AWAY )
      );

      const request = Observable.ajax
        .getJSON( searchAPI( payload ) )
        .delay( DELAY_SERVER_RESP_BY )
        .takeUntil( blockers )
        .map( ( response ) => receivedSearchEntities( response.result ) )
        .catch( err => {
          return Observable.of( addError( err.message ) );
        });

      return Observable.concat(
        loading,
        request,
      );
    });
}

export const rootEpic = combineEpics( searchEntitiesEpic );