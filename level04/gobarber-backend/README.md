<h1 align="center">
  <img
    alt="TypeScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="150px"
  />
</h1>
<h2 align="center">
  Starting the GoBarber Back-end
</h2>P



**Module Achercture and tests in Node.js**

- TDD and DDD concepts: What is and when to use TDD (Test Driven Development) and DDD (Domain Driven ;
Development)

- Separating Modules: Implementing the DDD metodology separating the components of the application in modules;

- Infra Layer: Separating some modules in a 'infra' folder;

- Import configuration: Fixing all the imports after moving the folders around;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/1.%20Basic%20Configuration/Imports.md

- Liskov Substitution Principle: Add a interface to handle with the typeorm and implements in the Appointments repository;

- Rewriting repositories: Unclipping the typeorm from the appointment repository;

- Dependency Inversion Principle: Unclipping the CreateAppointmentService from the infra layer;

- Refactoring user module: Appling the same changes made in the 'appointments' module to the user module;

- Dependency Injection: Adding dependency injection in the application services using the lib 'tsyringe';

  - Create a tutorial;

- Using controllers: Refactoring the application routes using controllers;

- Tests & TDD: Why to create automated tests, what is TDD and how to use;

- Configuring Jest: Install the lib 'jest' and create a basic test;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/Tests/jest/1.%20Configuration.md

- Thinking on tests: Strategies to create unit tests;

- Creating first test: Creating a basic test to the CreateAppointmentService usin a fake repository;

- Coverage Report: Configuring test coverage;

- Appointments Test: Creating a test to simulate the error when create two appointments in the same date;

- Create user Test: Creating tests to the CreateUsersService;

- Authetication Testing: Isolating the password hash resource to a provider and then creating fakes interfaces to create authetication testes;

- Authentication Tests: Creating new authenticate tests;

- Storage Provider: Isolating the upload file feature to a provider;

- Avatar Update: Creating UpdateUserAvatar testes;

**Module Continuing app back-end**

- Mapping App Features: Describing all the functional and non funtional requiriments and business rules of the application, using the layout as reference;

- Applying TDD with pratices: Creating test for the send forgot password email feature;

- Password Recover: Creating test for the password recover;

- Passoword reset: Creating a service and tests to the reset password feature;

- Finishing Tests: Creating new tests to the reset password feature;

- Saving tokens in database: Creating UserTokensRepository and a migration to create a table in the database to store user tokens;

- Emails in development: Add the lib 'nodemailer' to send the forgot password email. It was user the 'Ethereal Mail' to test sending mail em development envoronment;

- Email Template: Configuring engine template 'handlebars' to send e-mail with templates;

- Engine Template: Create a handlebars file with the forgot email template;

- Refactoring Tests: Adding the function 'beforeEach' with the variables that repeat in each test;

- Update Profile: Creating a service and tests to update the user profile;

- Profile routes and controllers:


### Application Developed

### Requirements
#### Recover Password
**Functional Requiriments**
- The user must be able to recover your password informing your e-mail address;
- The user must be able to recevie an email with the password recover instructions;
- The user must be able to reset your password;

**Non Functional Requiriments**
- Use Mailtrap to test sending mail in dev environment;
- Use Amazon SES to sending mail in production environment;
- Sending mail must be executed in background;

**Business Rules**
- The link sent by an email to recover the password must expire in 2 hours;
- The user needs to confirm the new password when reset your password;

#### Profile Update
**Funcional Requiriments**
- The user must be able to update your name, email address and password;

**Business Rules**
- The user cannot change your email to another already in use;
- To update your password, the user needs to enter your old password;
- To update your password, the user needs to confirm your new password;

#### Appointments
**Functional Requiriments**
- The user must be able to list all registered providers;
- The user must be able to list the days of a month with at least one available time of a provider;
- The user must be able to list available schedules in a specific day of provider;
- The user must be able to make a new appoinment with a provider;

**Non Functional Requiriments**
- The provider list msut be stored in chace;

**Business Rules**
- Each appoinment must last exactly 1 hour;
- The appoinments must be available between at 8h to 18h (First at 8h, last at 17h);
- The user cannot schedule a busy time;
- The user cannot schedule a passed time;
- The user cannot schedule services with your self;

#### Provider panel
**Functional Requiriments**
- The provider must be able to list your appointments of a specific day;
- The provider must be recevie a notification whenever there is a new appoinment;
- The provider must be able to view all unread notifications;

**Non Functional Requiriments**
- The appoinments of the day must be stored in cache;
- The notifications must be stored in MongoDB;
- the notifications must be sent in real time using the Socket.io;

**Business Rules**
- The notification must have a unread or read status;

#### Technologies
- TypeScript;
- Express;
- ESLint, Prettier and EditorConfig;
- date-fns;
- uuidv4;
- TypeORM;
- tsyringe;
- bcrypt;
- jest;

### Database
- Postgres;

### Tools
- Insomnia;
- DBeaver;
- Docker;

#### Routes
Add new appointments
```
POST '/appointments'

Request Body
{
  "provider": "",
  "date": ""
}
```
List appointments
```
GET '/appointments'
```

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.21.1][yarn] or higher installed on your computer. From your command line:

```bash
# Configure a docker image with postgres
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create a database called
gostack_gobarber

# Clone this repository
$ git clone https://github.com/phenriq694/GoStack_Modulos.git

# Go into the repository
$ cd GoStack_Modulos/level04/gobarber-backend

# Install dependencies
$ yarn

# Run the migrations
yarn typeorm migration:run

# Start application
$ yarn dev:server

# To Test the application
$ yarn test
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
