<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/85639202-5a83f580-b65e-11ea-85a5-5bcd51703320.png" 
    width="150px"
  />
  <p>
    Starting GoBarber Back-end
  </p>
</h1>

In this module, the back-end of the BootCamp project was started.

Module Content:

- Configuring Structure: How to create a nodejs project with express.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/2.%20Configurando%20estrutura%20base/Configurando%20estrutura%20base.md

- Nodemon & Sucrase: How to configuring nodemon to use the live reload and sucrase to use the new sintaxe to import/export of the new versions of javascript. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/2.%20Configurando%20estrutura%20base/nodemon/Como%20configurar%20o%20Nodemon.md

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/sucrase/Cofigura%C3%A7%C3%A3o%20do%20sucrase.md

- Docker Concepts: What is docker, how to use it, basic concepts and how it will be used in the project. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/docker/Postgres/Inst%C3%A2ncia%20do%20Postgres.md

- Sequelize & MVC: What is an ORM, examples using sequelize, what is MVC acherctecture and how to configure the application with it.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/README.md
  https://github.com/phenriq694/base_de_conhecimento/tree/master/node/2.%20Configurando%20estrutura%20base/MVC

- ESLint, Prettier & EditorConfig: How to install and configure tools of liting. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/3.%20Code%20Styling/ESLint/ESLint%20Configuratoin.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/3.%20Code%20Styling/Prettier/Prettier%20Configuration.md

- Configuring Sequelize: basic structure to use sequelize in the application. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/1.%20Configura%C3%A7%C3%B5es%20iniciais/1.%20Configurando%20o%20sequelize.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/1.%20Configura%C3%A7%C3%B5es%20iniciais/postgres.md

- User Migration: How to create migrations with sequelize

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/2.%20migrations/Cria%C3%A7%C3%A3o%20de%20migrations.md

- User Model: How to create models. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/3.%20Models/Cria%C3%A7%C3%A3o%20de%20uma%20model.md

- Creating models loader: How to create a models loader.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/4.%20Loader%20de%20models/Loader%20de%20models.md

- Registering users: Create the user controller to store new user in the databse.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Controllers/Controller%20para%20cadastro%20de%20usu%C3%A1rio%20padr%C3%A3o.md

- Generating password hash: How to configure the user model to receive a password, encrypt with the 'bcryptjs' lib and with a hook on the model to encrypt the password before saving in the database.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/3.%20Models/Gerando%20hash%20de%20senha.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Database/ORMs/sequelize/Hooks/Hooks.md

- JWT Concepts: What is and how to use JWT.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Autentica%C3%A7%C3%A3o%20JWT/Conceitos%20JWT.md

- JWT Authetication: Creating a Session controller and use JWT to autheticate in the application. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Autentica%C3%A7%C3%A3o%20JWT/Configura%C3%A7%C3%A3o%20da%20autentica%C3%A7%C3%A3o%20JWT.md

- Authetication Middleware: Creating an update method on the user's controller and blocking using authentication middleware to prevent access by users who are not authenticated to the application.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Middlewares/Autentica%C3%A7%C3%A3o.md

- User update: Configure update method in the User controller.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Controllers/Controller%20para%20atualizar%20cadastro%20de%20usu%C3%A1rio%20padr%C3%A3o.md

- Validating data input: How to validate data input with the lib 'yup'.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Valida%C3%A7%C3%A3o%20dos%20dados/Valida%C3%A7%C3%A3o%20dos%20dados%20como%20Yup.md

## Application Developed
In this model we have developed an API that registers users and allows updating users through a session and authentication.

### Routes
Create a new user
```
POST '/users'

Request Body
{
  "name": "",
  "email": "",
  "password": "",
}
```
Update a user
```
PUT '/users'

Bear Authetication

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

### Technologies
- Express;
- ESLint, Prettier and EditorConfig;
- sequelize;
- bcryptjs;
- jsonwebtokn;

### Database
- Postgres;

### Tools
- Insomnia;
- Postbird;
- Docker;

### :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.21.1][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/phenriq694/GoStack_Modulos.git

# Go into the repository
$ cd GoStack_Modulos

# Change the branch
$ git checkout goStack_modulos_2019

# Go into the main repository
$ cd modulo02/Starting GoBarber Back-end

# Install dependencies
$ yarn

# Create a docker container with postgres
$ docker run --name gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Run the migrations
$ yarn sequelize db:migrate

# Start back-end
$ yarn dev
``` 

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
