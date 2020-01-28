# Full working project for week tree

## Make it work

Download the code. 

Run npm install in the shell.

First go to modules/database.js and change the connection parameters with the user and password we created in class.

You will have to have the world database created and also madridview in order to have everything working. Check in the other codes alongs shall you need extra databases.

Run node app.js ( a message Listening on port 3000 should appear) If not try to find what is the problem


## Structure

/ main app.js , package.json etc.
/modules -> contains the repositories (did you remember the repository pattern) Code related to the database data extraction
/routes -> routing -> conversion from URL to code
/public -> resources outside the code such as images and icons
/views -> you should not be looking at this at the moment

### About

This little application tries to show you the basic use of SQL from a NodeJs. It is a simple CRUD application (Create Retrieve Update and Delete)
