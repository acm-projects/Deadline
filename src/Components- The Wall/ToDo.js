import React, { Component } from "react";
import "./Columns.css"

class ToDoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="todoListMain">
                    <form>
                        <input placeholder="add a task">
                        </input>
                        <button className="todo" type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;