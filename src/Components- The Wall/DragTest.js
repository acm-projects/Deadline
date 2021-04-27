import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import "./style.css"
import { Component } from "react";
import axios from "axios";

const board = {
    columns: [
        {
            id: 1,
            title: "Next Up",
            cards: [
                {
                    id: 2,
                    title: "Presentation Prep",
                    description: ""
                },
                {
                    id: 3,
                    title: "The Wall functionality",
                    description: "focus on draggable and droppable bars"
                }
            ]
        },
        {
            id: 2,
            title: "In Progress",
            cards: [
                {
                    id: 9,
                    title: "Integrate backend with frontend",
                    description: "send and retrieve database by firebase"
                }
            ]
        },
        {
            id: 3,
            title: "Complete",
            cards: [
                {
                    id: 10,
                    title: "Homepage UI improvement",
                    description: "change the color based on the color palette"
                },
                {
                    id: 1,
                    title: "Wireframes",
                    description: "color palette, key design concepts"
                }
            ]
        },
        {
            id: 4,
            title: "Notes",
            cards: [
                {
                    id: 11,
                    title: "Meeting with team before working on slides",
                    description: "8pm every Tuesday"
                }
            ]
        }
    ]
};

class DragTest extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          dragLoading: false,
          taskName: "",
        };
    }
  componentWillMount = () => {
    
    axios
      .get("https://us-central1-deadline-17bb4.cloudfunctions.net/api/projects")
      .then((response) => {
        console.log(response.data);
        this.setState({
          taskName: response.data.taskName,
          dragLoading: false,
        });
      })
      .catch((error) => {
        if (error.response != undefined) {
          if (error.response.status === 403) {
            this.props.history.push("/");
          }
        }
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };
    render() {
        const { classes } = this.props;
        const { errors, dragLoading } = this.state;
    return (
       <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
                id: new Date().getTime(),
                ...draftCard
            })}
            onCardNew={console.log}
        />
    );
}
}


export default DragTest;

