# PI Viewer
## Background
This project creates the PI Viewer Web Application, which allows users to easily create portable PI displays without requiring onsite servers / overhead.

## Tech Stack
- Docker
- Nginx (Reverse Proxy Server)
- Angular (Front End)
- Golang (Back End)
- Mongo (DB)

## Docker Commands
For developers- here are some useful commands for using docker:
```
list all running containers by name only
docker ps -q 

kill all listed containers
docker kill $(docker ps -q)

build tagged (named) image
docker build -t="go-srv:v1" .


run container, mapping port 80 to port 80
docker run -p 80:80 8d5c1b1de192
docker run --rm --name="containername"
docker run --name="gosrv" --rm  go-srv:v2
docker run --rm --name="nginxsrv" -p 80:80 go-nginx:v4

run composed image
docker-compose up
docker-compose down OR docker-compose kill

ssh into running container
docker run -it --rm --privileged --pid=host justincormack/nsenter1
```