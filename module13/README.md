<h1 align="center">
  <img 
    alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  Advanced Topics
</h2>

In this module, it was presented how to use Service and Singleton design patters. Also, it was presented how to use cache for some queries. The application developed in the module 03 was used to implement these examples. 

Module Content:

- Patterns Concepts: What design patters are and when to use them;

- Abstracting Validations: Separating all validations to middlewares to add to their respective routes;

- Abstracting Appointments: Adding the business rules of the store method of the appointment controller to a service;

- Abstracting Controllers: Separating some business rules from the Available and Appointment Controllers to Services;

- Cache Structure: Configuring cache using the lib 'ioredis'; 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Cache/Redis%20Configuration.md

- Provider Cache: Adding cache in the Provider Controller;

- Cache Strategy: How to use cache with different keys preffix;

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
cd modulo13/Advanced Concepts

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
