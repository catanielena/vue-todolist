const app = new Vue({
    el:"#root",
    data: {
        todos: [
            {
                thingToDo: 'Fare i compiti',
                textClass: ['item__text'],
                d: 0
            },
            {
                thingToDo: 'Fare la spesa',
                textClass: ['item__text'],
                d: 0
            },
            {
                thingToDo: 'Fare il bucato',
                textClass: ['item__text'],
                d: 0
            }
        ],
        newTodo: '',
        checked : [],
        inputText : document.getElementsByClassName("item__text"),
        d: 0
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
            console.log(this.inputText);
            if(this.inputText[index].disabled == true) {
            this.inputText[index].disabled = false;
            } else if(this.inputText[index].disabled == false){
                this.inputText[index].disabled = true;  
            }
        }
    }
})
