# Chart Toppers API

## About 

A RESTful API created to accompany the [Chart Toppers UI](https://github.com/aliroemhildt/chart-toppers). This server is written in JavaScript using Express and Node.js. This API contains data for the top 5 songs from the Billboard Year End chart for the years 1980 - 2021. Each song object contains an id, title, artist, and image url. 

View the Heroku deployment [here](https://dashboard.heroku.com/apps/chart-toppers-api)

## Set Up

1. clone down this repo
2. `cd` into your local copy
3. run `npm install`
4. run `npm start`

## Technology Used

- JavaScript
- Express
- Node.js
- Heroku

## Endpoints

| Description     | URL             | Method          | Required Properties for Request | Sample Successful Response |
|:----------------|:----------------|:----------------|:----------------|:----------------|
| get all songs | https://chart-toppers-api.herokuapp.com/api/v1/songs | GET | none | an object containing all song data for the years 1980 - 2021
