import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import formReducer from "./reducers/formReducer";

const middlewares = [thunk]
let composeEnhancers = compose

if(process.env.NODE_ENV === 'development'){
  if((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  }
}

const store = createStore(
  formReducer, 
  composeEnhancers(applyMiddleware(...middlewares)
  ));
export default store;