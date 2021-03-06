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
            //weekendsVisible: true,
            currentEvents: [],
            events: []
        };
    }

    componentWillMount = () => {
        this.setState({ projectLoading: true });

        var axios = require('axios');
        var events = [];
        var config = {
        method: 'get',
        url: 'http://localhost:5000/deadline-17bb4/us-central1/api/projects',
        headers: { }
        };

        var self = this;
        var count = 0;
        axios(config)
        .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                
                var x = 0;
                
                var seconds, convertedDate, year, month, day, formattedDate;
                
                if(response.data[i].tasks != null && response.data[i].tasks[x].deadline != null)
                    var currentTask = response.data[i].tasks[x];    

                while (currentTask != undefined) {
                        convertedDate = new Date(Date.UTC(1970, 0, 1));
                        seconds = currentTask.deadline._seconds;
                        convertedDate.setSeconds(seconds);

                        year = convertedDate.getUTCFullYear() ;
                        month = convertedDate.getUTCMonth() + 1;
                        day = convertedDate.getUTCDate();
                        var convertedMonth, convertedDay;

                        if(month < 10) {
                            convertedMonth = '0' + month;
                        } else {
                            convertedMonth = month;
                        }

                        if(day < 10) {
                            convertedDay = '0' + day
                        } else {
                            convertedDay = day
                        }

                        formattedDate = year + "-"  + convertedMonth + "-" + convertedDay;

                        events.push({ 
                        id: count,
                        title: currentTask.name, 
                        date: formattedDate
                       });

                       x++;
                       count++;
                       currentTask = response.data[i].tasks[x];      
                }  console.log(events);
           }
          self.setState({ currentEvents: events });
    
          console.log(self.state.currentEvents)
          renderEventContent(self.state.currentEvents);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.setState({ projectLoading: false });
      };

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
/*
    handleWeekendsToggle = () => {
    
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }
*/
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

     render() {
        const { classes } = this.props;
        const { errors, projectLoading } = this.state;
        //{this.renderSidebar()} //move back to the return
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
                        weekends={true}
                        select={this.handleDateSelect}
                        events={this.state.currentEvents}
                        /*
                        events={[
                            { title: 'wireframes', date: "2021-04-04"},
                            { title: 'presentation prep', date: "2021-04-28"},
                            { title: 'the wall functionality', date:'2021-04-16' },
                            { title: 'integrate backend', date:'2021-04-20' },
                            { title: 'homepage UI', date:'2021-04-26' },
                            { title: 'meet with team', date: '2021-04-14'}
                          ]}
                          */
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        
                        //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
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

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.event._def.title}</b>
        </>
    )
}

function renderSidebarEvent(event) { 
    return (
        <li key = {event.id}>
            <b>{event.title}</b>
            <i>{'  ' + event.date}</i>
        </li>
    )
}