import React, {Component} from "react";
import Todo from './Todo'
import NewTodoForm from "./NewTodoForm";
import  "./TodoList.css"
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [] 
        }
        this.addTodo =  this.addTodo.bind(this)
        this.remTodo =  this.remTodo.bind(this)
        this.renTodo =  this.renTodo.bind(this)
        this.renderTodo = this.renderTodo.bind(this)
        this.togTodo =  this.togTodo.bind(this) 
    
    }
    renTodo(items, id) {
        const updTodos = this.state.todos.map((item) => {
            if(item.id === id) {
                return {...item, td_name: items}
            }
            return item
        })
        this.setState({todos: [...updTodos]})
    
    }
    togTodo(id) {
        const updTodos = this.state.todos.map((item) => {
            if(id === item.id){
                return {...item, completed: !item.completed}
            }
            return item
        })
        this.setState({todos: [...updTodos]})
    }
    remTodo(id) {
        this.setState((st) => ({
            todos: st.todos.filter(item => item.id !== id)
        })) 
    }
    renderTodo() {
        return (
            <ul>
                {this.state.todos.map((item, idx) => (
                    <Todo

                        func1 = {this.remTodo}
                        func2 = {this.renTodo}
                        func3 = {this.togTodo}
                        key = {item.id}
                        completed = {item.completed}
                        id = {item.id}
                        idx = {idx}
                        td_name = {item.td_name}

                    />
                ))}
            </ul>
        )
    }
    addTodo(item) {
        this.setState((st) => ({
            todos: [...st.todos, item]
        }))
    }

    render() {
        
        return (
            
            <div className="todo-list"> 
                <h1> Todo list <span> A Simple react Todo list</span></h1>
                {this.renderTodo()}           
                <NewTodoForm
                    func = {this.addTodo}
                />
                
            </div>
        )
    }

}

export default TodoList; 