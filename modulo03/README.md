<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/85639202-5a83f580-b65e-11ea-85a5-5bcd51703320.png" 
    width="150px"
  />
</h1>
<h2 align="center">
  Continuing GoBarber APIs
</h2>

In this module, the API configuration of the BootCamp Project was finished, using advanced concepts from node.js, adding new features and some services that complement the application. 

Module Content:

- Sending files - In the section of this module, I learned how to configure the upload of files for the application, how to relate tables with sequelize and add new avatar features to a user. It was divided into two classes:

  - Multer Configuration: How to install and use the lib 'multer', needed to handle other types of requests bodies, such as sending files;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/1.%20Configura%C3%A7%C3%A3o%20do%20multer.md

  - User Avatar: How to configure a table to receive references from a 'js' file using sequelize. How to create a migration to add a new column to the database table and add a relationship between two tables in the migration and in the model using the 'belongsTo ()' method;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/2.%20Configura%C3%A7%C3%A3o%20no%20banco%20de%20dados.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/3.%20Models/Relacionamentos.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/2.%20migrations/Chave%20Estrangeira.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/2.%20migrations/Query%20Interface%20Methods.md

- Scheduling Features - In this section of the module, I learned to work with dates, mainly using the 'date-fns' lib. It was divided into 7 classes:

  - Listing Service Providers: In this class, we added one more feature in the application in addition to the concepts already presented in the previous modules. Here, we use more options in the model methods within the controllers to manipulate the return data using filters such as 'where', what information we wanted from the elements, how we wanted to show it, using the 'attributes' and 'include' and the configuration of a field type 'VIRTUAL', within the model that handles references to files, using only code to serve images to the front-end, for example;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/3.%20Models/M%C3%A9todos.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/2.%20Configura%C3%A7%C3%A3o%20no%20banco%20de%20dados.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/3.%20Habilitar%20o%20acesso%20das%20imagens.md

  - Migration and Model Scheduling: In this class, we created the 'appointments' table to store scheduling information that users make at a service provider and we used the knowledge from the previous section to relate this table to the 'Users' table through migration and model;

  - Scheduling Service: In this class, the appointments controller was configured with the concepts already learned. In addtion, it was presented how sequelize handles with dates; 
  
  - Scheduling Validation: In this class, I learned to work with dates, make comparisons and calculations using the lib 'date-fns';

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/M%C3%B3dulos/date-fns/date-fns.md

  - User Scheduling Listing: In this class, we configure the 'index' method in the appointment controller so that the user can list all appointments;

  - Applying Pagination: In this class, we use the conditions 'limit' and 'offset', applying pagination to the data returned from the search;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/M%C3%B3dulos/date-fns/date-fns.md

  - Listing Provider's Appointments: In this class, the sequelize operator 'between' was presented to compare two values ​​and return if the element is in the range;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/M%C3%B3dulos/date-fns/date-fns.md

- Sending Notifications - In this section of the module, I learned how to configure a docker instance with MongoDB, which was chosen as the application's notification database, since this data will not be structured or have a relationship, and also, it needs be performative. In addition, I learned how to use the 'mongoose' to configure and make queries and inserts in MongoDB. This section was divided into 4 classes:

  - Configuring MongoDB: In this class, it was presented how to configure a docker instance with MongoDB and the first settings with 'mongoose';

    https://github.com/phenriq694/base_de_conhecimento/blob/master/docker/MongoDB/Inst%C3%A2ncia%20do%20MongoDB.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/MongoDB/mongoose/1.%20Configura%C3%A7%C3%A3o%20do%20mongoose.md

  - Notifying New Appointments: In this class, it was presented how to configure a 'schema' equivalent to sequelize models, how to import these 'schemas' in the controllers and how to use their methods;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/2.%20Schemas.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/M%C3%A9todos.md

  - Listing User Notifications: In this class, the controller for notificatoins and the 'index' method were created to list user notifications. A new 'schema' method, 'find', was introduced to find all elements based on a filter;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/M%C3%A9todos.md#find

  - Mark Notifications Read: In this class, we create the 'update' method of the notification controller to update when a notification is read. Another 'schema' method, 'findAndUpdate', was introduced, which finds and updates an element.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/MongoDB/mongoose/M%C3%A9todos.md#findbyidandupdate

- Sending Cancellation Emails: In this section of the module, I was introduced to advanced nodejs topics, such as sending emails using the 'nodemailer' lib, creating templates for these emails, how to use a database of key-value like Redis and queues with BeeQueue. This section was divided into 7 classes:

  - Schedule Cancellation: In this class, we created the 'delete' method in the appointment controller to cancel them. We use concepts already presented in previous sections and modules, such as calculating and comparing dates in lib 'date-fns'.

  - Configuring Nodemailer: In this class, we use the 'nodemailer' lib to send emails. A service was introduced to create inboxes to test in development mode, Mailtrap.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Envio%20de%20e-mails/1.%20Configurando%20o%20Nodemailer.md

  - Configuring Email Templates: In this class, I was introduced to a template engine to configure email templates. Using the 'express-handlebars' and 'nodemailer-express-handlerbars' libs, we configure an email template to import data from the application's database to compose the email.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Envio%20de%20e-mails/Templates%20de%20e-mail.md

  - Configuring Queues with Redis: In this class, I learned how to send email using the concept of queue that uses a database of key-value ​​to be very performative and not affect the performance of the application. An instance of the docker was created with Redis and the configuration of a queue with the lib 'bee-fila' to run 'jobs' in parallel to the executions of the application.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/docker/Redis/Inst%C3%A2ncia%20do%20Redis.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Configurando%20Fila/1.%20Configurando%20o%20BeeQueue.md

  - Monitoring Queue Failures: In this class, I learned how to configure a queue to print error messages that occur during execution on the nodejs terminal.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Configurando%20Fila/2.%20Monitorando%20falhas%20na%20fila.md

  - List of Available Schedules: In this class, a controller was configured to check whether a date for an appointment at a provider is available or not. For that, concepts already presented in the previous sections and modules were used, mainly the use of lib 'data-fns' which, in this module, was fundamental for the calculation and comparison of dates.

  - Virtual Fields in Scheduling: In this class, it was presented how to create a method inside a field in a model to calculate if the dates have already been passed or if they are cancelable.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/3.%20Models/Cria%C3%A7%C3%A3o%20de%20uma%20model.md#adicionando-fun%C3%A7%C3%B5es-dentro-dos-campos

- Advanced Configurations: In this section of this module, I learned how to monitor errors in production with the Sentry service and also a very important concept that of environment variables to hide confidential information from the code. This section was divided into 2 classes:
 
  - Exception handling: In this class, the Sentry service was introduced, to deal with errors in production. It was presented how to create an account in the service, how to configure a new project and the code. In addition, the lib 'express-async-errors' was introduced to return errors in asynchronous functions and another lib to deal with the way errors are shown with 'youch'.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Monitoramento%20de%20erros/Tratamento%20de%20exce%C3%A7%C3%B5es.md

  - Environment Variables: In this class, we configure a file that contains the environment variables to protect confidential data from the code and also a template file that must accompany the code so that other developers can know what is needed to execute the application. To load these variables into the application, the lib 'dotenv' was used.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Vari%C3%A1veis%20de%20Ambiente/Vari%C3%A1veis%20de%20ambiente.md

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
cd modulo03/Continuing GoBarber APIs

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
