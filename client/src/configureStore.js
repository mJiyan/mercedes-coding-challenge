import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import reducers from "./redux/reducers";

// Create redux store with history
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history, reducers), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunkMiddleware,
                logger
                // ... other middlewares ...
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        )
    );

    return store;
}
