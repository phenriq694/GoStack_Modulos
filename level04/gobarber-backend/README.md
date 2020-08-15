<h1 align="center">
  <img
    alt="TypeScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="150px"
  />
</h1>
<h2 align="center">
  Starting the GoBarber Back-end
</h2>P



Module Achercture and tests in Node.js:

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

### Application Developed

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
