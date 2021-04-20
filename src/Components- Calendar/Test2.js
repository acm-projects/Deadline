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
        axios
          .get("https://us-central1-deadline-17bb4.cloudfunctions.net/api/projects")
          .then((response) => {

            let events = [];

            for (let i = 0; i < response.data.length; i++) {
                 var oldDeadline = response.data[i].deadline; 
                 var converted = new Date(oldDeadline.toDate());
                 converted = converted.toDateString();
                 
                 events.push({ name: response.data[i].projectName, deadline: converted, id: response.data[i].projectId });
            }

            console.log(events);
            this.handleEvents(events);
            renderEventContent(events);
          })
          .catch((error) => {
            if (error.response != undefined) {
              if (error.response.status === 403) {
                this.props.history.push("/projects");
              }
            }
            console.log(error);
            this.setState({ errorMsg: "Error retrieving tasks" });
          });
      };

    render() {
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

    renderSidebar() {
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

    handleEvents = (events) => {
        this.setState({        
          currentEvents: events
        });
    }
}

function renderEventContent(eventInfo) {
    console.log(eventInfo[3].deadline)
    return (
        <>
            <b>{eventInfo[3].deadline}</b>
            <i>{eventInfo[3].name}</i>
        </>
    )
}

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <b>{formatDate(event.deadline, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{'  ' + event.name}</i>
        </li>
    )
}