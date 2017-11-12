var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name : 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
    //state = state || {name : 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };    
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id) // keeps every item that hasnt the same id
            };                
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };     
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
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
    
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
    
    console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Đ'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Blabla'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Pulp fiction',
    genre: 'Who knows'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'La View en Rose',
    genre: 'Drama'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});
