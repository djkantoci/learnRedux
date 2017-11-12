var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    search: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    return state;
};
var store = redux.createStore(reducer); 

var currentState = store.getState();
console.log('currentState', currentState);
