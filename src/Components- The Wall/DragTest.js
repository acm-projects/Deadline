import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import "./style.css"

const board = {
    columns: [
        {
            id: 1,
            title: "Next Up",
            cards: [
                {
                    id: 1,
                    title: "Wireframes",
                    description: "imagine there is a description here"
                },
                {
                    id: 2,
                    title: "Presentation Prep",
                    description: ""
                },
                {
                    id: 3,
                    title: "The Wall functionality",
                    description: ""
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
                    description: ""
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
                    description: ""
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
                    description: ""
                }
            ]
        }
    ]
};

function DragTest() {
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

export default DragTest

