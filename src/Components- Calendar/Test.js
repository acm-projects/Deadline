import React from 'react'
import Calendar from 'react-calendar'
import {useState} from "react";
import "./Calendar.css"

function MyCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                className="general"
                onChange={onChange}
                value={value}/>
        </div>
    );
}

export default MyCalendar;