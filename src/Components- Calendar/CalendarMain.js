import React from 'react'
import DenseAppBar from "../Components- The Wall/Nav";
/*import MyCalendar from "./Test";*/
import "./Calendar.css"
/*import WeekCalendar from 'react-week-calendar';*/
import 'react-week-calendar/dist/style.css';
import CalendarTest from "./Test2";

function CalendarMain() {
    return (
        <div>
            <DenseAppBar/>
            {/*<MyCalendar/>*/}
           {/*<WeekCalendar className="general"/>*/}
           <CalendarTest/>
        </div>
    )
}

export default CalendarMain;