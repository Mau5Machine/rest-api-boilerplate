
# Rest-API-Boilerplate

  

## Documentation

  

The video tutorial for this application can be found at  [Build REST API with Node, Express, Sequelize](https://www.youtube.com/watch?v=0Yu-4_Vj4sU).

You may find the following links helpful:

 - [Sequelize Docs](https://sequelize.org/master/manual/getting-started.html)

  

## Project setup

```

npm install

```

  

**IMPORTANT** make sure you rename the `.env.example` file to `.env`.

```
# .env
POSTGRES_DB=rest
POSTGRES_USER=postgres
POSTGRES_PASS=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

PORT=4000

# Random UUID from https://www.uuidgenerator.net/
API_KEY=378a3bae-0dc7-46b8-bd01-eb7c936d50ea

```

  

### Compiles and hot-reloads for development

```

npm run dev            #linux
nodemon src/index.js   #windows

```
