/**
 * Combine all reducers in this file and export the combined reducers.
 */

 import { combineReducers } from "redux";
 import { connectRouter } from "connected-react-router";
 
 /*
  * routeReducer
  *
  * The reducer merges route location changes into our immutable state.
  * The change is necessitated by moving to react-router-redux@5
  *
  */
 
 /**
  * Creates the main reducer with the dynamically injected ones
  */

 const createRootReducer = (history, injectedReducers) => {
   return combineReducers({
     router: connectRouter(history),
     ...injectedReducers
   });
 }


 export default createRootReducer;
 