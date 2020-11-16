KeepUp: Maintenance Dashboard
Setup: Follow these steps exactly
Clone this repository
cd into the directory it creates
In the api directory, create a copy of the database.json.example and remove the .example extension.
Run npm install and wait for all dependencies to be installed
Run npm start to verify that installation was successful.
What is KeepUp?
KeepUP is an app that allows transportation owners to keep up with the maintenance issues of the cars their drivers are allowed to take home so routine maintenance issues don't become expensive emergency issues. 
You will be using the React library to build out this application.

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

Users
{ "id": 1, "username": "Steve", "email": "me@me.com" }
Tickets
{ "id": 1, carId: 1, "comment": "What's up?" }
Cars
{
    "id": 1,
    "userId": 2,
    "carMake": Toyota 
    "CarModel": Camry
}
WeeklySummaries
{ "id": 1, "userId": 1, "loggedInUserId": 3 }
Tasks
{ "id": 1, "userId": 3, "task": "Take out garbage" }
Professional Requirements
All teammates must use React and JSON-server.
Each module should have a comment at the top with the following info: author(s) and purpose of module
The README for your project should include instructions on how another person can download and run the application
An ERD showing the database relationships. A screenshot/image should be included on your README.
How to Handle Authentication
You will be using local storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their username and password to the users collection in your API. You will then immediately take the id of the object in the response and save it to local storage.

localStorage.setItem("activeUser", user.id)
If you add a Logout feature, all you will need to do is remove the session storage item.

localStorage.removeItem("activeUser")
Keep in mind some tips for a good usable app
Use acceptable conventions
Logo positioned at top left
Navigation across the top or down the left side
Visual hierarchy
Most important information is the most prominent
Break pages up into defined sections
Logically related content should be related visually
That which is clickable should be obviously clickable.
Eliminate distractions
Use only two typefaces
Limit color pallet (3 colors with black and white)
Use a grid
Support scanning (users don't read)
Use plenty of headings
Short paragraphs
Bulleted lists
Strive for consistency.
Bountiful-Blizzards Nutshell-React Application
Setup: Follow these steps exactly

Clone this repository
cd into the directory it creates
In the api directory, create a copy of the database.json.example and remove the .example extension.
Run npm install and wait for all dependencies to be installed
Run npm start to verify that installation was successful.
Built with:
React
Javascript
CSS
Github
Git Bash
Functions
Modulation
JSON