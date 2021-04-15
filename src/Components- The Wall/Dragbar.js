import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./Dragbar.css"
import axios from "axios"
/*
const admin = require('firebase-admin');
async function getData () {
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };

      const {
        data: { data }
      } = await axios.get("https://us-central1-deadline-17bb4.cloudfunctions.net/api/projects", config);  
    //console.log(data);
}


getData();*/

const Tasks = [
    {
        id: '1',
        name: 'Wireframes',
    },
    {
        id: '2',
        name: 'Code Calendar View Page',
    },
    {
        id: '3',
        name: 'Integrate backend with frontend',
    },
    {
        id: '4',
        name: 'Code The Wall page',
    },
    {
        id: '5',
        name: 'Presentation Prep',
    }
]

function Drag() {
    const [tasks, updateTasks] = useState(Tasks);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateTasks(items);
    }

    return (
        <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="tasks">
                        {(provided) => (
                            <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map(({id, name, thumb}, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <p>
                                                        { name }
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
        </div>
    );
}

export default Drag;
