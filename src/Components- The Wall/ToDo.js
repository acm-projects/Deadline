import React, { Component } from "react";
import "./Columns.css"

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { inputs: ['input-0'] };
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="todoListMain">
                    <form>
                        <input placeholder="add a task">
                        </input>
                        <button
                            className="todo"
                            type="submit"
                            onClick={ () => this.appendInput()}>
                                add
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
}

export default ToDoList;