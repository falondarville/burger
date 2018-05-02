# Burger Handlebars Application

This application allows users to type in a burger name, which will then appear on the screen. From there, the user can click on "Eat it" and the burger name will move to the eaten column. The application is meant to display my skills with handlebars, express, MVC structuring, and more. 

This application was deployed to Heroku:

[Use the Application Here](https://safe-woodland-79086.herokuapp.com/)

![Alt text]('./public/assets/img/burger.gif')

## Technologies and Methods Used
JavaScript, HTML/CSS, Express, Node, Handlebars (express-handlebars npm package), MVC

## Challenges and Learning Summary

The primary challenge I encountered was getting used to the MVC folder structuring. I was concerned with the amount of code redundancies that we were creating, as per the assignment instructions. We created an ORM, then we had out single model. I only grasped the importance of ORM after having a conversation with a TA and understanding that this type of structuring makes sense when you have many models. It's more efficient when you need to create reusable code. In this case, having an ORM and model doesn't accurately represent the true purpose of ORM and the MVC framework unless you were anticipating adding others models. 

Another challenge was configuring Heroku with MySQL simply because I did not know that I needed to create one through an add-on. I ended up using JawsDB and adding my configuration variables, ensuring the protection of my data. 