import { applyMiddleware } from "redux";
import { rootReducer } from './reducer/index';
import rootSaga, { sagaMiddleware } from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { connect } from "react-redux";

const enhancerList = [];
const devToolsExtension =
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

if (typeof devToolsExtension === "function") {
    enhancerList.push(devToolsExtension());
}

const composedEnhancer = composeWithDevTools({});


const passRootReducer = (state, action) => {
    return rootReducer(state, action);
};

const store = connect(passRootReducer, composedEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;