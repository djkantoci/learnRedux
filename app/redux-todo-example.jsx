var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    // ovo više tak ne radi:
    //window.devToolsExstension ? window.devToolsExstension() : f => f
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)); 

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    
    console.log('Search test is', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Work now'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Jejjejejeje'
});
