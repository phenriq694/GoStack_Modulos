<h1 align="center">
  <img
    alt="TypeScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="150px"
  />
</h1>
<h2 align="center">
  First Project with Node.js
</h2>

In this module, I leaned how to set up a node.js project with TypeScript, how to set up the code style for TypeScript, how to create a basic application using these two technologies together and apply SOLID principles.

Module Content:

- Structure Configuration: How to start a node.js project with TypeScript.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/Configuration.md

- EditorConfig: How to install and configure the EditorConfig to maintain code patterns between different editors and OSs;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/2.%20Code%20Styling/EditorConfig.md

- ESLint: How to install and configure the ESLint to maintain the code style.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/2.%20Code%20Styling/Eslint/ESLint%20Configuration.md

- Importing TS Files: How to configure ESLint to understand ts files importation.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/2.%20Code%20Styling/Eslint/eslint-import-resolver-typescript.md

- Prettier: How to install and configure the Prettier to maintain the code style.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/2.%20Code%20Styling/Prettier/Prettier%20Configuration.md

- Debugging NodeJS: How to use the VS Code debugger.

- Application Layout: Preview of the application that will be developed in the next module.

- Registering Appointments: Handling dates using the 'date-fns' lib.

- Data Validation: How to validate the request body data and trigger and error with status code as a response.

- Appointement Model: How to create a model an configure the application entity .

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/Models/Configuring%20Models.md

- Creating Respositories: How to create a repository and interact with the models.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/nodejs/Repository/Configuring%20Repository.md

- Listing Appointments: Creating a new method in the 'AppointmentRepository' repositorynto list all elements stored in the private attribute 'appointments'.

- Working with data: How to implement DTO (Data Transfer Object) to pass an object as params and explain what params the function or method will need.

- Services & SOLID : In this class, some SOLID principles were used, such as 'Single Responsability', where we sepate all application functionality into models, respositories and services, each with its responsability and Dependency Invertion, in which we receive a 'Repository' in a 'Service' constructor without creating a repository instance within the service, allowing you to create other services that will use the same repository instance.

### Application Developed
In this module, we have developed a basic API that registers and lists appointments for a service provider, such as a barber.

#### Technologies
- TypeScript;
- Express;
- ESLint, Prettier and EditorConfig;
- date-fns;
- uuidv4;

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
# Clone this repository
$ git clone https://github.com/phenriq694/GoStack_Modulos.git

# Go into the repository
$ cd GoStack_Modulos/level02/first-project-with-nodejs

# Install dependencies
$ yarn

# Start application
$ yarn dev:server
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
