# FriendFinder

### What is FriendFinder?
FriendFinder is a full-stack application that will ask the user questions, then compare their answers with those from other users. 

_Example of FriendFinder_

![Example of FriendFinder](/images/ffindex.png)

### NPM who?
What does NPM stand for?

NPM is a comand line interface program to manage node.js Libraries (it stands for **node package manager**).

You will need to install the following NPM to run **FriendFinder**
* NPM Express

## More questions than answers!
When the user clicks **Go to Survey** button on the main page it will send the user to the **Survey** page.  
It will ask the user to enter thier _Name and Link to thier photo_.
Once that is entered the application will make 10 statements that the user will choose a number 1-5.  With 1 being they strongly disagree with the statement and 5 being they strongly agree with the statement.

_Example of Survey_

![Example of Survey page](/images/ffsurvey.png)

## API
Heroku is used to host the application.  At the bottom of the main page and survey page there is an **API Friends List** button.
Once the button is clicked it will display a JSON of all possible friends that have taken the survey.

_Example of JSON_

![Example of JSON return](/images/ffapi.png)