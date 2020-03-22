import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import wikiSearchReducer from './redux/reducers/reducer';
import { Provider } from 'react-redux';

// Redux uses one big global store which I initialised here - this gives my app and components
// access to the global state
//wikiReducer is my main reducer for the state and thunk handles my API request to wikipedia
const store = createStore(
    wikiSearchReducer,
    applyMiddleware(thunkMiddleware)
);



//To let the app have access to the global state you need to wrap it in the
//<Provider> component and pass the store
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
