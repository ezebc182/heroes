# Heroesapp

![alt text](https://github.com/ezebc182/heroes/blob/master/src/assets/img/dc.jpg)

This project consists into the first step on creating a SPA with angular.

## Description

The app shows a collection of default Heroes (from Marvel & DC) that can be filtered by name, and of course show its detail in a separated page for the Hero.

Basically, the app use api RESTFul of Firebase, in order to perform the 4 basics http operations:

* GET: Here you can get all the availables heroes from database (Firebase) or simply, the information of one of them. 
* POST: Creates a new Hero, with some data like: name, bio, appearence date and house (Marvel or DC).
* PUT: As it is, update some piece of data of the Hero.
* DELETE: Given a hero, you can remove it from database. Confirmation window will ask to confirm your operation.

All this operations (apart of get method) will be able to perform if the user is logged in.

## Authentication

As this preliminary version, the user log in to the app via auth0 through the following social accounts:
* Google
* Twitter

When the user logged in, a new menu will show up, "Dashboard". Here is where the heroes are added, updated, checked or deleted.

## Use

By entering the "heroes" application you can:

* See a list of heroes
* Filter heroes by name
* In case the search for a hero is not satisfactory, you can:
 - In case of being an anonymous user, login to be able to add it to the list.
- If you are logged in, go directly to the administration panel (Dashboard link) in which a table will be displayed in order to:
  - See
  - Edit
  - Remove
  - Create

heroes.

## Stack
- Angular
- Firebase RESTFul API, Cloud storage, Realtime database.
- Boostrap 4


