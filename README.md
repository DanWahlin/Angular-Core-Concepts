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

1. Note that this build puts the build files directly in the `dist` folder. If your `angular.json` file in your own custom project puts them in a subfolder such as `dist/your-project-folder` then you'll need to update the `docker-compose.yml` file. In that case you'd change:

    ```yaml
    volumes:
      - ./dist:/usr/share/nginx/html
    ```

    To:

    ```yaml
    volumes:
      - ./dist/your-project-folder:/usr/share/nginx/html
    ```


1. Run `docker-compose build`

1. Run `docker-compose up`

1. Visit `http://localhost`

## Running the `Production` Version in Containers

1. Run `docker-compose -f docker-compose.prod.yml [build | up]`. This uses a multi-stage Docker build process to create the nginx image for the Angular app.

    **Note**: This project build puts the Angular build files directly in the `dist` folder. If your `angular.json` file in your own custom project puts them in a subfolder such as `dist/your-project-folder` then you'll need to update `nginx.prod.dockerfile` with the appropriate path. You'd need to update this instruction:

    ```dockerfile
    COPY --from=node /app/dist /usr/share/nginx/html
    ```

    To:

    ```dockerfile
    COPY --from=node /app/dist/your-project-folder /usr/share/nginx/html
    ```
