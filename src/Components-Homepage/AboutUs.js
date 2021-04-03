import React from 'react';
import './AboutUs.css';
import Box from '@material-ui/core/Box';

class AboutUs extends React.Component {
    render() {
        return(
                <div>
                    <Box className="boxs">
                    <center>
                    <header className='header'>About Us</header></center>
                    <h3 className='stylee'>

                        <h4 className="h4">
                            <center>Deadline is an application that allows you to conquer your next programming project by creating automatically generated development lifecycle schedules.
                        </center></h4>
                        <h3 className="h3"><center>Minimum viable product</center></h3>
                        <p className="h4">
                        An app that allows you to input different projects, tasks associated with each project, and then uses this information to automatically generate a dynamic project schedule. </p>

                        <h3 className="h3"><center>Essential Features:</center></h3>
                        <ul>
                        <p className="h4">
                            <li>List tasks, assign estimated timerlines for each task, and include any dependencies that exist between tasks</li>
                            <li>Choose what you want to optimize for: Quality, Speed, achieving MVP</li>
                            <li>Uses different PM techniques to schedule tasks based on what you choose.
                                With this information, it automatically generates a daily schedule</li>
                        </p>
                        </ul>

                        <h3 className="h3"><center>Other features:</center></h3>
                        <ul>
                        <p className="h4">
                            <li>“Daily standup” - App checks in each day and you input your progress</li>
                            <li>Automatically adjusts schedule according to progress made</li>
                            <li>Creates aesthetic graphs depicting project progress for motivation</li>
                            <li>Ability to invite other users to your project</li>
                        </p>
                        </ul>

                        <h3 className="h3"><center>Potential Stretch Goals</center></h3>
                        <ul>
                        <p className="h4">
                            <li>Use machine learning to predict how long a task will take the user, based on their previous experience</li>
                        <h5>
                            E.g. If they estimated a task would take 5 days in the past, and it actually takes 8 days, the next time the user estimates 5 days, the app will schedule that task to take 8 days.
                            Could make the model more complex by incorporating the category of the task (e.g. coding tasks tend to take longer than writing tasks)
                        </h5>
                            <p>
                            <li>Allow users to tailor the app towards different types of projects</li>
                                <ul>
                                <h5>Examples:
                                    <li>For a software development project, you have the ability integrate with GitHub</li>
                                    <li>For a presentation project, you have the ability to record yourself presenting, time yourself, compare your presentation to earlier recordings</li>
                                    <li>For a school project, you have the ability to keep track of grades and the grade you need on the next project for an A</li>
                                </h5>
                                </ul>
                            </p>
                            <p>
                        <li>Continue tailoring the app more specifically to coding</li>
                        <li>Automatically analyzes code quality and slows down the schedule if it’s determined to be low</li>
                        <li>Integrate with GitHub using the GitHub API</li>
                                <li>Social feature that allows you to show off your progress to other users of the app</li>
                            </p>
                        </p>
                        </ul>
                    </h3>
                    </Box>
                </div>
        )
    }
}

export default AboutUs