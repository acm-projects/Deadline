# Deadline
​
### Overview
*Deadline* is an application that allows you to conquer your next programming project by creating automatically generated development lifecycle schedules
​
### Minimum viable product
​
An app that allows you to input different projects, tasks associated with each project, and then uses this information to automatically generate a dynamic project schedule
​
Essential Features:
​
- List tasks, assign estimated timelines for each task, and include any dependencies that exist between tasks
- Choose what you want to optimize for: Quality, Speed, achieving MVP
- Uses different PM techniques to schedule tasks based on what you choose
- With this information, it automatically generates a daily schedule
  ​
  Other features:
  ​
- “Daily standup” - App checks in each day and you input your progress
- Automatically adjusts schedule according to progress made
- Creates *aesthetic* graphs depicting project progress for motivation
- Ability to invite other users to your project
  ​
### Potential Stretch Goals
​
##### Can be chosen by team
​
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
      ​
### Tech Stack
​
##### Frontend
​
- [React](https://reactjs.org/)
  ​
##### Backend
​
###### Potential NoSQL Databases
​
- [MongoDB](mongodb.com)
- [Firebase](https://firebase.google.com/)
  ​
### Software
​
- [Git Bash](https://git-scm.com/downloads)
    - Necessary for working with command line Git on a Windows computer
- [Figma](https://www.figma.com/)
    - Free UX design tool that is completely web-based
- [Adobe XD](https://www.adobe.com/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjwkdL6BRAREiwA-kiczGlKOD6-DASI9BUGIwQBgdAt33vydE4YxCgvMX5TDh2T5m9Trjq-jBoCFugQAvD_BwE:G:s&s_kwcid=AL!3085!3!315233774139!e!!g!!adobe%20xd!1641846436!65452675151)
    - More sophisticated UX tool, you can have one project for free
- [Visual Studio Code](https://code.visualstudio.com/)
    - Useful IDE with lots of plugins to make your development easier
      ​
### Learning Resources
Look through all of these resources at the beginning of the semester!
- [How to be successful in ACM Projects](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit?usp=sharing)
-   [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
-	[Getting started with React](https://reactjs.org/docs/getting-started.html)
-	[Comparing top databases](https://dzone.com/articles/firebase-vs-mongodb-which-database-to-use-for-your)
     Collapse

