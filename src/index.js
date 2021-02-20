import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
const counter = (state, action) => {
    state = state || 0
    if(action.type === 'add') {
        return state + action.payload
    } else {
        return state
    }
}
const store = createStore(counter)
function addAsync() {
    setTimeout(() => {
        store.dispatch({type: 'add', payload: 1})
    }, 2000)
}
function addOdd() {
    if (store.getState() % 2 === 1) {
        store.dispatch({type: 'add', payload: 1})
    }
}
function render() {
    ReactDOM.render(<App value={store.getState()}
                         add={() => {store.dispatch({type: 'add', payload: 1})}}
                         add2={() => {store.dispatch({type: 'add', payload: 2})}}
                         addAsync={addAsync}
                         addOdd={addOdd}/>, document.getElementById('root'));
}
render()
store.subscribe(render)

