var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Shut up'
                },
                {
                    id: 4,
                    text: 'Go to sleep'
                }
            ]
        };
    },
    handleAddTodo: function(text) {
        alert('new todo: ' + text);
    },
    
    render: function () {
        var {todos} = this.state;
        
        return (
            <div className="grid-x align-center">
                <div className="small-6 cell">
                    <TodoList todos={todos}/>
                    <AddTodo onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
