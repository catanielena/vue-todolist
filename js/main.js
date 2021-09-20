const app = new Vue({
    el:"#root",
    data: {
        todos: [
            'Fare i compiti', 'Fare la spesa', 'Fare il bucato'
        ],
        newTodo: ""
    },
    methods: {
        // Add todo to todos
        addTodo: function() {
            if(this.newTodo != "") {
                this.todos.push(this.newTodo);
                console.log(this.todos);
                this.newTodo=""
            }
        },
        // Remove todo from todos
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        }
    }
})