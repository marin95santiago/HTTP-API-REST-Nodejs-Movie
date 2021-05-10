# HTTP-API-REST-Nodejs-Movie
Api rest using typescript, node JS, mongo DB

This API rest use JWT for the token authentication, so we'll need create an user, 

the url: http://localhost:5000/signup (the port many vary) receives the values "username, email, password" for signup

then we'll need to signin, the url: http://localhost:5000/signin (the port many vary) receives the values "email, password" for signin, now we have our token in json format!

so, these are the urls and the functions that each one has:

url for create a director
http://localhost:5000/create/director (the port many vary) ----------- it receives the values "name: string, lastName: string, age: number, nationality: string"

url for list the directors
http://localhost:5000/directors (the port many vary)

url for create an actor
http://localhost:5000/create/actor (the port many vary) ----------- it receives the values "name: string, lastName: string, age: number, nationality: string"

url for list the actors
http://localhost:5000/actors (the port many vary)

url for create a movie
http://localhost:5000/create/movie (the port many vary) ----------- it receives the values "name: string, date: date, director: one director id, actors: one or more actors id"

url for list the movies
http://localhost:5000/movies (the port many vary) -------- we can sort by director the movie list adding: the http://localhost:5000/movies/director, also apply a filter using the header, in the header we'll need add a filter field like this "name:MovieName"

url for create a tv show
http://localhost:5000/create/tv-show (the port many vary) ----------- it receives the values "name: string, description: string, director: one director id"

url for list the tv shows
http://localhost:5000/tv-show  (the port many vary) -------- we can apply a filter using the header, in the header we'll need add a filter field like this "name:TvShowName"

url for create a tv show season
http://localhost:5000/create/tv-show-season (the port many vary) ----------- it receives the values "name: string, seasonNumber: number, description: string, tvShowId: one tv show id"

url for list a tv show season
http://localhost:5000/tv-show-season (the port many vary)

url for create a tv show episode
http://localhost:5000/create/tv-show-episode (the port many vary) ----------- it receives the values "name: string, episodeNumber: number, seasonId: one season id, description: string, date: date, director: one director id, cast: one or more actors id, tvShowId: one tv show id"

url for list the tv show episode
http://localhost:5000/tv-show/"seasonNumber"/"episodeNumber" ----------- it will show us an specific episode of a tv show

Thank you for reading!
