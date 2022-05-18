import React, {Component} from "react";
import { v4 as uuidv4, v4 } from 'uuid';
import "./NewTodoForm.css"
class NewTodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {td_name: "", id: {v4}}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        const newState = {...this.state, id: v4(),completed: false}
        this.props.func(newState)
        this.setState({td_name: ""})
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {

        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}  >
                <label htmlFor = "td_name">To do name</label>
                <input
                    id =   "td_name"
                    name = "td_name"
                    value={this.state.td_name}
                    onChange = {this.handleChange}
                ></input>
                <button>Add todo!</button>
            </form>
        )
    }
}

export default NewTodoForm; 