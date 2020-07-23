<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/85639202-5a83f580-b65e-11ea-85a5-5bcd51703320.png" 
    width="150px"
  />

  <p>
    GoBarber Back-end
  </p>
</h1>

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
cd module10/backend

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
