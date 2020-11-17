Welcome to Hapi!
Have you ever been developing an app and found yourself spending a huge amount of time navigating to several different places over and over again to find technology documentation, the project github account, wireframes, or entity relationship diagrams? Would you like a way to keep the resources and documentation for your project in one place so that they are quickly accessible? If you answered yes, look no futher than HAPI.

Why was Hapi created?
As a software developer, I spend a large amount of time navigating to the same URLs over and over again to find API and technology documentation, project GitHub accounts, wireframes, and entity relationship diagrams. Remembering exactly where the documentation was found or trying to go back and find the URL to a specific resource can become a time consuming process when working on a project.

What is Hapi?
Hapi is a single page, React application that was designed to save software developers time by giving them a means to create project boards where they can keep track of the APIs, ERDs, Wireframes, Technologies, documentation, and notes that they are using in specific projects so that these resources are easily accessible in one central place. With Hapi, users have the ability to create project boards and log APIs, ERDs, Wireframes, and Technologies under the different projects that they are working on through full CRUD functionality. This app also gives users the ability to search through a list of public APIs and save any API from their search to one of their project boards.

Want to use Hapi? Follow the instructions bellow to run the application.
Clone down this repository by clicking the "Clone or Download" button above, copying the SSH key, and running the following command in your terminal git clone SSH KEY GOES HERE.
cd into the root directory of the app.
Run npm install and wait for all dependencies to be installed.
cd into /src/modules and open Credentials.js.example.
You must sign up for a Cloudinary account and get your own Cloudname and Upload preset to use the image upload functionality in the Hapi app. Once you have these, put them into the appropriate spot in the Credentials.js.example file.
Remove the .example from the Credentials.js.example file.
Run npm start to verify that installation was successful and start the application.
cd into the /api directory, and remove the .example extention from the database.json.example file.
In the api folder, run json-server -p 5002 -w database.json.
Go to http://localhost:3000/ to view the app.
What can you do with Hapi?
After completing the setup above, in the browser, navigate to http://localhost:3000.
If you are a returning user, login to Hapi with your account information.
Never signed up for Hapi before? No problem! Click the register a new account link and complete your registration.
