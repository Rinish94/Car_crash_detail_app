import { showData } from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

// export const store = createStore(showData);
 const rootReducer = combineReducers({
  showData,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

// let composeEnhancer = compose;

// if (process.env.NODE_ENV !== "production") {
//   composeEnhancer =
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//   // ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   // : compose;
// }
