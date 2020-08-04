<h1 align="center">
  <img 
    alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  Node Security
</h2>

In this module, some libraries were presented to increase security in an API;

Module Content:

- Using Express Brute: How to configure and use the lib 'express-brute' to prevent many attempts at server sessions;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Securtiy/express-brute.md

- Using Helmet: How to configure lib 'helmet' to add new headers and avoid security breaches;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Securtiy/helmet.md

- Using Rate Limit: How to configure the lib 'express-rate-limit' with Redis to limit the number of requests in a period of time of all routes; 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Securtiy/express-rate-limit.md

- Using Cors: How to add a front-end address to access the API and make requests using the middleware cors;

- Github and Greenkeeper: How to use the Github Security feature and the Greenkeeper service to keep all libraries up to date with the latest security updates.


## Routes
Create a new user
```
POST '/users'

Request Body
{
  "name": "",
  "email": "",
  "password": "",
  "provider": true | false
}
```
Update a user
```
PUT '/users'

Bearer Authetication

Request Body
{
  "name": "",
  "email": "",
  "oldpassword: "",
  "password": "",
  "confirmPassword": ""
}
```
Create a session
```
POST '/sessions'

Request Body
{
	"email":"",
	"password": ""
}
```
Upload a avatar image:
```
POST '/files'

Bearer Authetication

Multipart:
{
  "file": File
}
```
List Providers
```
GET '/providers'

Bearer Authetication
```
List Provider's Available Schedules 
```
POST '/providers/:provider_id/available'

Bearer Authetication

Query Params:
{
  "date": timestamp date
}
```
Create an appointment
```
POST '/appointments'

Bearer Authetication

Request Body: 
{
	"provider_id": 2,
	"date": "2020-06-27T15:00:00-03:00"
}
```
List appointments
```
GET '/appointments'

Bearer Authetication

Query Params:
{ 
  "page": 1
}
```
Cancel an appointment
```
DELETE '/appointments/:appointment_id'

Bearer Authetication
```
List Provider's Schedule
```
GET '/schedule'

Bearer Authetication

Query Params:
{
  "date": "2020-06-27T15:00:00-03:00"
}
```
List notifications
```
GET '/notifications'

Bearer Authetication
```
Mark notification read: 
``` 
PUT '/notifications/:notification_id'

Bearer Authetication
``` 
## Libs:
- Multer;
- date-fns;
- nodemailer;
- express-handlerbars;
- nodemailer-express-handlerbars;
- beequeue;
- express-async-erros;
- youch;
- dotenv;
- mongoose;
- ioredis;

## ORM:
- Sequelize;

## Databases:
- Redis;
- MongoDB;
- Postgres;

## Tools and Services:
- Mongo Compass;
- Mailtrap;
- Sentry;

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.21.1][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/phenriq694/GoStack_Modulos.git

# Go into the repository
cd GoStack_Modulos

# Change the branch
git checkout goStack_modulos_2019

# Go into the main repository
cd modulo13/module14

# Install dependencies
yarn

# Create a docker container with postgres
docker run --name gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create a docker container with MongoDB
docker run --name gobarber_mongo -p 27017:27017 -d -t mongo

# Create a docker container with Redis
docker run --name gobarber_redis -p 6379:6379 -d -t redis:alpine

# Run the migrations
yarn sequelize db:migrate

# Start Queue 
yarn queue

# Start back-end
yarn dev
``` 

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
