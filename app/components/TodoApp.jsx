var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                },
                {
                    id: uuid(),
                    text: 'Shut up'
                },
                {
                    id: uuid(),
                    text: 'Go to sleep'
                }
            ]
        };
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state;
        
        return (
            <div className="grid-x align-center">
                <div className="small-6 cell">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={todos}/>
                    <AddTodo onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
