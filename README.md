# Angular Core Concepts

This project shows several core features of Angular including:

* Components
* Data Binding
* Communication between components
* Services
* Routing

## Running the Project Locally

1. Install the Angular CLI

    `npm install -g @angular/cli`

1. Run `npm install` at the root of this project

1. Run `ng serve -o`


## Running the Project Using Docker Containers

1. Install the Angular CLI

    `npm install -g @angular/cli`

1. Run `npm install` at the root of this project

1. Build the project

    `ng build`

1. Ensure that you have volumes (file sharing) enabled in the Docker Desktop settings.

1. Run `docker-compose build`

1. Run `docker-compose up`

1. Visit `http://localhost`

## Running the `Production` Version in Containers

1. Run `docker-compose -f docker-compose.prod.yml build`. This uses a multi-stage Docker build process to create the nginx image for the Angular app.

1. Run `docker-compose -f docker-compose.prod.yml up` and visit `http://localhost`.

1. Run `docker-compose -f docker-compose.prod.yml down` once you're done.