# GBH Library REST API

## Project setup (Using bare Node.js)

The project require `Node.js#10.16.0` to run. Once installed Node.js, enable production enviroment setting the `NODE_ENV` environment variable to `production`, then clone this repo and execute `npm install` to install dependencies.

After installed dependencies, it's time to set the environment variables required to work. Copy the `.env.example` file and rename it with the name
`.env`. Set the parameters in the `.env` file and the run the migrations using the command `npm run database migrate:latest` and then seed the database using the command `npm run database seed:run`.

Once the database migrations had run and the database seeded, start the project running `node index.js`.

## Project setup (Using docker)

### Build image using docker
In case you want to use docker, you can build the image typing
```
docker build -t library:1.0.0 .
```

### Run docker image

You need to set the enviroment variables, I recommend use a .env file, you can copy the example one and set the parameters. To start the image type
```
docker run --restart unless-stopped --env-file .env -d -p 3000:3000 -v ~/docker-volumes/library/logs:/app/logs --name library library:1.0.0
```

Then execute the database seeder using the command

```
docker exec library npm run database seed:run
```

## Project setup (Using docker-compose)

You just need to edit the environment variables in the `docker-compose.yml` file, save it and the run the following command:
```
docker-compose up -d
```

To seed the database using this option you need to execute the seeder manually, but you need to check the name of the running container and the run:

```
docker exec CONTAINER_NAME npm run database seed:run
```

**NOTE:** This option will create a MySQL instance binding port 3306 on host machine. Take care not to create a conflict with an already running MySQL instance, set the right parameters on `docker-compose.yml` file and check the environment variables.

### TODO

- Add docs comments to generate documentation
