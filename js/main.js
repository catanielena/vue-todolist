const app = new Vue({
    el:"#root",
    data: {
        todos: [
            {
                thingToDo: 'Fare i compiti',
                textClass: ['item__text']
            },
            {
                thingToDo: 'Fare la spesa',
                textClass: ['item__text']
            },
            {
                thingToDo: 'Fare il bucato',
                textClass: ['item__text']
            }
        ],
        newTodo: '',
        checked : []
    },
    methods: {
        // Add todo to todos
        addTodo: function() {
            const addItem = {
                thingToDo: '',
                textClass: ['item__text']
            }
            if(this.newTodo != '') {
                addItem.thingToDo = this.newTodo;
                this.todos.push(addItem);
                console.log(this.todos);
                this.newTodo = ''
            }
        },
        // Remove todo from todos
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        },
        show: function(index) {
            console.log(this.checked);
            if(this.todos[index].textClass.includes('done')) {
                this.todos[index].textClass = this.todos[index].textClass.filter(e => e!=='done');
            } else {
                this.todos[index].textClass.push('done');            }
        },
        edit: function(index) {
            let input = document.getElementsByClassName("item__text");
            if( input[index].disabled == true) {
                input[index].disabled = false;
            } else {
                input[index].disabled = true
            }
        }

    }
})
