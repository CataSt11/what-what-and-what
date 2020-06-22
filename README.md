# **What, What & What?**


[What, What & What?](https://catast11.github.io/what-what-and-what/) -  An app that gives you ideas when you don't have.<br>
What to listen? What to see? What to eat?<br>
Just say how you feel and in an instant you'll have the right music, the right film or even the recipe of a delicious culinary temptation.

According to their mood, the users will be redirected to:
 * YouTube for music recommendations; 
 * Rotten Tomatoes for film recommendations;
 * BBCGoodFood for recipes recommendations;


## UX 

### User stories 

Just to start with, here are a few opinions gathered from potential users: 

 1. I can't wait to use this app. I often ask around for music recommendations, as I get bored with the playlists I have and I am not always inspired.
 2. It happened to me to see titles in my Netflix account, but I wasn't interested as I did't know too much about those films. I could have used some more insight. Trailers are sometimes deceiving.
 3. Deciding what to eat is the toughest decision to take...everyday.

### Strategy 

The goal was to keep everything simple and accessible, minimalist but comprehensive. Everything should be in the distance of a 'click'.

### Scope

When researching for what would users want the most, the frequent answers were related to food and new music. Very close behind the first two choices were the films.

### Structure 

Everything is in one place and easy to find and to reach. The instructions are easy to read, understand and follow.

### Skeleton 

Please check the link below.

[Wireframes](https://github.com/CataSt11/what-what-and-what/tree/master/skeleton) 

### Surface

Simplicity was the main goal throughout the whole project. It was pursued even-more at this plane. The appearance is simple, clean and fun. 
The mindset from all the other planes melted into this one.


## Features

The app contains one page, as everything happens on the 'home' page.
Right under the logo, which is also the name of the app - in the header, the users will find the instructions on how to use the app.

In the main section, the page is split into two sides (only on wide screen devices, wider than 768px). On the left side the users will have to answer to a simple question with three possible predefined answers on how they feel in that moment. 
Also on the left side they will initially see an empty area.

According to their mood they will see how the left side empty area will become colored, in the same time with receiving on the right side of the screen recommendations on music, films and food.
This information appears also colored in the same color predefined for the respective mood.

The information, if clicked, is accessed and takes the users to external websites. E.g. YouTube - in order to listen to the recommended songs.

The footer contains an email address for contact. The email address is not functional at this point. It will become functional as the app will develop and other features will be added for a greater experience.

The appearance of the app might not be on every taste, but the lines and spaces, the colors and the font are a clear option of the producer's artistic choice.


#### Features left to implement

From lack of time and sufficient knowledge, especially related to databases, at this point there are several features left to implement.

* Crowdsourced database for songs, films and recipes.
* Add more options for moods and also recommendations.
* Create more pages in the same project and open the recommendations embedded within.
* Give/receive ‘likes’ on recommendation.
* Watch the trend for a week/month. 


## Technologies Used

* HTML5
* CSS3
* BootstrapCDN
* Gitpod
* GitHub
* jQuery
* JavaScript
* Google fonts
* Balsamiq Wireframes

It wasn't any need to use API's for how the app is structured. API's will be used in line with future development.
A JSON file was used in this project more as an endeavour of having a professional approach, as opposed to an absolute need. At this stage a simple JS file would have been technically enough.


## Testing

The app was tested continuously during the process of building it. For example, the JavaScript code which is now working as expected, was tested through setting various listeners and alerts that were removed when the code became fully functional.
Jasmine wasn't used as testing environment for JavaScript in this project.

The CSS code was tested in W3C CSS Validation Service and no errors were to be found.

The app was tested within various browsers, such as Chrome, Safari, FireFox; 
and on various mobile terminals, such as: Motorola Moto G4, Samsung Galaxy S5, Pixel 2 & Pixel 2 XL, iPhone 5, 6, 7, 8, X (& Plus versions), iPad, iPad Pro.
It proved to be responsive and functioned well on all devices, telephones and tablets.

All links responded correctly to the test. The information is correct and is displayed in a new tab, as expected.

The HTML code is mentioned at the end as during the validation through W3C Markup Validation Service it had the following errors: 

´´´Error: Element center not allowed as child of element h1 in this context. (Suppressing further errors from this subtree.) 
From line 28, column 21; to line 28, column 28

Error: The center element is obsolete. Use CSS instead.
From line 28, column 21; to line 28, column 28

Error: The center element is obsolete. Use CSS instead.
From line 84, column 13; to line 84, column 20.´´´

The code does what is expected and works perfectly for now, therefore it was no emergency in changing it, but it has priority '0' for future development.

### _Issues that need to be fixed:_

As per the errors found through the W3C Markup Validation Service, a series of changes need to be conducted.
The errors previously mentioned will be eliminated by using CSS and removing ``` center ``` tag from the HTML code. -- priority '0'.


## Deployment

The site is hosted by GitHub Pages and it’s deployed directly from the master branch. 
The path for launching is the following: 

1. Go to https://github.com/CataSt11//what-what-and-what
2. Click on Settings - 
3. Go to GitHub Pages - 
4. Go to Source - 
5. Choose Master branch.

The website will be updated automatically when new commits are pushed to the master branch. 
For proper deployment on GitHub Pages the landing page must be named index.html, as a general rule.
In this situation the project contains only the index.html, which is a fortunate coincidence.

In order to run locally, one must clone this repository directly using  ```git clone``` https://github.com/CataSt11/what-what-and-what.git 


## Credits

#### Content

All the content in the app was written by me. 
The users are redirected from this app to content of other websites which are the rightful owners of their content.

#### Media

The users are redirected to:
 * YouTube for music content.
 * Rotten Tomatoes for film content.
 * BBCGoodFood for recipes content.

#### Acknowledgements

Special thanks to my mentor Brian Macharia, from whom I received valuable advice and feedback.
Also to my friend Alex Georgescu who made time to answer a 'tonne' of questions regarding JS functionality.
