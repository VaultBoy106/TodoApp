import React, {Component} from "react";
import "./Todo.css"
class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {isEditing: false, ren_txt: this.props.td_name}
        this.handleRemove= this.handleRemove.bind(this) 
        this.handleChange = this.handleChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
        this.renderTodo = this.renderTodo.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.changeState = this.changeState.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle() {
        
        this.props.func3(this.props.id)
    }
    changeState() {
        this.setState((st) => ({
            isEditing: !st.isEditing
        }))
    }
    handleRemove() { 
       this.props.func1(this.props.id)
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    handleForm(e) {

        e.preventDefault()
        const newState = {...this.state, idx: this.props.idx, id: this.props.id}
        this.props.func2(this.state.ren_txt, this.props.id)
        this.changeState()
    }
    renderTodo() {
        return (
            <div className="Todo">
                <li onClick = {this.handleToggle} className={ this.props.completed ? "Todo-task completed" : "Todo-task"} >{this.props.td_name}</li>
                <div className="Todo-buttons">
                    <button onClick = {this.handleRemove}>
                        <i className = "fas fa-trash"></i> 
                    </button> 
                    <button onClick = {this.changeState}>   
                        <i className = "fas fa-pen"></i>
                    </button>
                </div>
            </div>
        )
    }
    renderForm() {

        return (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={this.handleForm}>
                    
                    <input
                        id = "ren_txt"
                        name = "ren_txt"
                        value = {this.state.ren_txt}
                        onChange = {this.handleChange}
                    ></input>

                    <button>Finished</button>
                </form>
            </div>
        )    
    }
    render() {
        
        return (
            <div>
                {this.state.isEditing ? this.renderForm() : this.renderTodo()}
            </div>
        
        )
    }
}
export default Todo; 