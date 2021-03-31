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
                    <h3 className='stylee'>Deadline is an application that allows you to conquer your next programming project by creating automatically generated development lifecycle schedules
                        Minimum viable product
                        An app that allows you to input different projects, tasks associated with each project, and then uses this information to automatically generate a dynamic project schedule Essential Features:

                        List tasks, assign estimated timelines for each task, and include any dependencies that exist between tasks
                        Choose what you want to optimize for: Quality, Speed, achieving MVP
                        Uses different PM techniques to schedule tasks based on what you choose
                        With this information, it automatically generates a daily schedule Other features:
                        “Daily standup” - App checks in each day and you input your progress
                        Automatically adjusts schedule according to progress made
                        Creates aesthetic graphs depicting project progress for motivation
                        Ability to invite other users to your project
                        Potential Stretch Goals
                        Can be chosen by team
                        Use machine learning to predict how long a task will take the user, based on their previous experience
                        E.g. If they estimated a task would take 5 days in the past, and it actually takes 8 days, the next time the user estimates 5 days, the app will schedule that task to take 8 days
                        Could make the model more complex by incorporating the category of the task (e.g. coding tasks tend to take longer than writing tasks)
                        Allow users to tailor the app towards different types of projects
                        Examples:
                        For a software development project, you have the ability integrate with GitHub
                        For a presentation project, you have the ability to record yourself presenting, time yourself, compare your presentation to earlier recordings
                        For a school project, you have the ability to keep track of grades and the grade you need on the next project for an A
                        Continue tailoring the app more specifically to coding
                        Automatically analyzes code quality and slows down the schedule if it’s determined to be low
                        Integrate with GitHub using the GitHub API
                        Social feature that allows you to show off your progress to other users of the app</h3>
                    </Box>
                </div>
        )
    }
}

export default AboutUs