# TV Watchlist Web App
## Summary
App with login feature where users can add Series, Movies and TV-Shows to their own watchlist. Items added to the watchlist have title, genre, rating and description and it's also possible to update and delete items which are already on the list. <br />

The app is deployed and can be accessed through the link below.

## Heroku

* Link: <link> https://tv-watchlist.herokuapp.com</link>
* Username: test@test.com - Or make your own account.
* Password: 1234.
* As the app is deployed through the free tier on Heroku it might have a load time of up to two minutes.

## Tech
* Spring Boot - Convention-over-configuration framework. Built REST APIs with Spring Boot.
* Spring Data JPA - Support for the Java Persistence API used for Object Relational Mapping.
* MySQL - Database for the app.
* React - UI component library used as the base for the frontend.
* React Router - Easy in-app routing with built in history handling.
* Redux - Used for state management and for making the app even more modular and functional
* Axios - Used for making asynchronous HTTP requests to the REST endpoints.
* Bootstrap - Predefined CSS and components with ptions for customization.
* Material UI - React components that implement Google's Material Design.

## Setup
1. Clone the repo
```sh
git clone https://github.com/nbryn/tv-watchlist.git
```
2. cd into the client/react directory
```sh
cd tvwatchlist-client-react
```
3. Install NPM packages
```sh
npm install
```
4. Start the frontend server
```sh
npm start
```
5. Navigate back to the projects root directory
6. cd into the server/spring directory
```sh
cd tvwatchlist-server-spring
```
7. Start the development server
```sh
mvn spring-boot:run
```
