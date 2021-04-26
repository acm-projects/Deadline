import React from 'react'
import { Component } from "react"; 
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from "axios";
import "./Calendar.css"

export default class Calendar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            projectLoading: false,
            projectName: "",
            projectDesc: "",
            deadline: "",
            tasks: "",
            taskName: "",
            taskDeadline: "",
            weekendsVisible: true,
            currentEvents: []
        };
    }

    componentWillMount = () => {
        const { currentEvents } = this.state;
        this.setState({ projectLoading: true });

        var axios = require('axios');
        var events = [];
        var config = {
        method: 'get',
        url: 'http://localhost:5000/deadline-17bb4/us-central1/api/projects',
        headers: { }
        };

        axios(config)
        .then(function (response) { console.log('axios.then events') 
            for (let i = 0; i < response.data.length; i++) {
                
                var x = 0;
                if(response.data[i].tasks != null)
                    var currentTask = response.data[i].tasks[x];    

                while (currentTask != undefined) {
                        currentEvents.push({ 
                        id: x,
                        name: currentTask.name, 
                        deadline: currentTask.deadline
                       });

                       x++;
                       currentTask = response.data[i].tasks[x];
                }  
           }
          console.log(currentEvents)
          renderEventContent(currentEvents);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.setState({ projectLoading: false });
        console.log('end of axios current events')     
        
        console.log(events)
      };

    renderSidebar() { console.log("sidebar render");
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                </div>
                <div className='demo-app-sidebar-section'>
                    <h2>All Tasks ({this.state.currentEvents.length})</h2>
                    <ul>
                        {this.state.currentEvents.map(renderSidebarEvent)}
                    </ul>
                </div>
            </div>
        )
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    handleDateSelect = (selectInfo) => {
        let title = prompt('Enter your task')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    handleEvents = (events) => { console.log("handle events")
        this.setState({        
          currentEvents: events
        });
    }

     render() { console.log("render")
        const { classes } = this.props;
        const { errors, projectLoading } = this.state;
        return (
            <div className='general'>
                {this.renderSidebar()}
                <div className="test">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.state.weekendsVisible}
                        select={this.handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                        /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                        */
                    />
                </div>
            </div>
        )
    }
}

function renderEventContent(eventInfo) { console.log("render event content"); console.log(eventInfo)
    return (
        <>
            <b>{eventInfo}</b>
            <i>{eventInfo}</i>
        </>
    )
}

function renderSidebarEvent(event) {
    console.log('render sb event events');
    console.log(event[0])
    return (
        <li key={event[0].id}>
            <b>{formatDate(event.deadline, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{'  ' + event.name}</i>
        </li>
    )
}