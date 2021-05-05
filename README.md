# Deadline
### Overview
*Deadline* is an application that allows you to conquer your next programming project by creating automatically generated development lifecycle schedules

#### Link to the [slide deck!](https://docs.google.com/presentation/d/11xFU-2aWDOfYbO9vCmPWhxl9KrpGjMv8Ff68yU8WVog/edit?usp=sharing).

### How To Deadline
1. Welcome To Deadline! First let's clone the directory ([Instructions](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)) at your desired location and then open the IDE of your choice.
2. Open a new terminal and cd to the cloned directory.
3. Give the command "npm install" and then "firebase serve". Note: You would like to make your own database. Backend add more. 
4. Give the command "npm start".
5. Now once the web page is loaded on the local host, you should be directed to the Home Page!
6. Click on "New Project" button to get started or navigate through the options in the Nav Bar.
7. Once you have imported the project, you should be able to view the calendar with the assigned deadlines for each task you added based on the complexities. 
8. Navigate through the Wall, dashboard and the calendar page to view your project in the respective formats.
9. That's it! You are all set to use this great tool and keep on top on your tasks.
10. That being said, if you are ever short on time, use Deadline!

### Minimum viable product
An app that allows you to input different projects, tasks associated with each project, and then uses this information to automatically generate a dynamic project schedule
Essential Features:
- List tasks, assign estimated timelines for each task, and include any dependencies that exist between tasks
- With this information, it automatically generates a daily schedule
  Other features:
- “Daily standup” - App checks in each day and you input your progress
- Automatically adjusts schedule according to progress made
- Creates *aesthetic* graphs depicting project progress for motivation
- Ability to invite other users to your project
### Steps we took

#### Frontend

1. Learned about React through this [tutorial](https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial).
2. Learned more about the MaterialUI and Bootstrap libraries and decided to go with MaterialUI! Good choice there
3. Developed our home page after learning about React and MateriaUI and how they work together through these links. [React Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2420s) and [MaterialUI](https://www.youtube.com/watch?v=-XKaSCU0ZLM).
4. Once the home page was coded and setup, delegated different pages amongst the two of us (Lac and Abhitej) and then worked on the Calendar, The Wall and the Dashboard.
5. An important library we used was [FullCalendar](https://fullcalendar.io), to get the current date and calendar view.
6. Then we made everything look a bit prettier across different browser and dimension settings!

### Backend
1. Learned how to use Firebase Firestore to store data
2. Learned to use the axios library to transfer information between the app and database
3. Created the algorithm to automatically schedule tasks based on task complexity
4. Integrated the database with the app to give it full functionality
### Algorithm to Automatically Schedule Tasks
- calculate the duration of the project
- traverse all of the tasks in the project and add all of their complexities together
- for every task, calculate the percentage of time needed by dividing its complexity by the project complexity
- set the task deadline

### Potential Stretch Goals
##### Can be worked in the future
- Use *machine learning* to predict how long a task will take the user, based on their previous experience
    - E.g. If they estimated a task would take 5 days in the past, and it actually takes 8 days, the next time the user estimates 5 days, the app will schedule that task to take 8 days
    - Could make the model more complex by incorporating the category of the task (e.g. coding tasks tend to take longer than writing tasks)
- Allow users to tailor the app towards different types of projects
    - Examples:
        - For a software development project, you have the ability integrate with GitHub
        - For a presentation project, you have the ability to record yourself presenting, time yourself, compare your presentation to earlier recordings
        - For a school project, you have the ability to keep track of grades and the grade you need on the next project for an A
- Continue tailoring the app more specifically to coding
    - Automatically analyzes code quality and slows down the schedule if it’s determined to be low
    - Integrate with GitHub using the [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest)
    - Social feature that allows you to show off your progress to other users of the app
 - Create a mobile app
    - To give push notifications about the project and upcoming deadlines.
    - To stay on track with small tasks and submissions.
    - Keep track of team's progress and assigned work!
    
### Tech Stack
##### Frontend
- [React](https://reactjs.org/)
##### Backend
###### Potential NoSQL Databases
- [MongoDB](mongodb.com)
- [Firebase](https://firebase.google.com/)
### Software
- [Git Bash](https://git-scm.com/downloads)
    - Necessary for working with command line Git on a Windows computer
- [Figma](https://www.figma.com/)
    - Free UX design tool that is completely web-based
- [Visual Studio Code](https://code.visualstudio.com/)
    - Useful IDE with lots of plugins to make your development easier
### Learning Resources
Look through all of these resources at the beginning of the semester!
- [How to be successful in ACM Projects](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit?usp=sharing)
-   [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
-	[Getting started with React](https://reactjs.org/docs/getting-started.html)
-	[Comparing top databases](https://dzone.com/articles/firebase-vs-mongodb-which-database-to-use-for-your)

### The Team

Project Manager: 

• Cady Baltz - [GitHub](https://github.com/cadybaltz) | [LinkedIn](https://www.linkedin.com/in/cadybaltz/)

Industry Mentor:

• Alex Dometrius - [LinkedIn](https://www.linkedin.com/in/alexdometrius/)

Participants:

• Abhitej Arora - Frontend - [GitHub](https://github.com/AbhitejArora) | [LinkedIn](https://www.linkedin.com/in/abhitejarora/)

• Lac Ngo - Frontend - [GitHub](https://github.com/lacjnhi) | [LinkedIn](https://www.linkedin.com/in/lacnhingo/)

• Te'a Washington - Backend - [GitHub](https://github.com/tewashi) | [LinkedIn](https://www.linkedin.com/in/te-a-washington-0b2b761b8/)

• Anh Nguyen - Backend - [GitHub](https://github.com/koisaai) | [LinkedIn](https://www.linkedin.com/in/anhnguyen1902/)

### Acknowledgements
[ACM UTD](https://www.acmutd.co/)

### This project won People's Choice Award for ACM Projects in Spring 2021! Here is the YouTube link for the live [presentation](https://youtu.be/uIPrAS7mQvc?t=4888)!
