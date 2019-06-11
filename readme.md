# PI Viewer
## Background
This project creates the PI Viewer Web Application, which allows users to easily create portable PI displays without requiring onsite servers / overhead. The application only requires the PI Web API with Cross Origin Resource Sharing (CORS) Access.

## Tech Stack
- Docker
- Nginx (Reverse Proxy Server)
- Angular (Front End)
- Golang (Back End)
- Mongo (DB)

## Usage 
- Run ```docker-compose up```
- Angular build with ```ng build --configuration=dev``` in angular-base subdirectory
- Monitor with ```docker stats```
- Kill with ```docker kill $(docker ps -q)```
