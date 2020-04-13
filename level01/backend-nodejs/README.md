<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  Backend with Node.js
</h2>

In this module, the basic concepts of Node.js and API REST were presented. 

Module Content:

- NodeJS Concepts: What is Node.js and how it works. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/README.md

- API REST Concepts: What is an API REST and its features. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/api/API%20Rest.md

- Create Node project: How to create a basic Node project with yarn and express. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/2.%20Configurando%20estrutura%20base/Configurando%20estrutura%20base.md

- Configuring Nodemon: How to install and configure the 'nodemon' package to restart the application when a change is made to the code and saved. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/2.%20Configurando%20estrutura%20base/nodemon/Como%20configurar%20o%20Nodemon.md

- HTTP Methods: What are the HTTP methods and how to use them in a Node project with 'express'. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/api/API%20Rest.md

- Using Insomnia: How to use the Insomnia App to make HTTP Requests and test the routes of the application.

- Types of Params: How pass and get requests params.

- Functional Application: How to build a basic API using GET, POST, PUT and DELETE. 

- Middlewares: What are middlewares and how to use them. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Middlewares/README.md

  
<h3 align="center"> API REST Developed </h3>
In this module, a basic API REST was developed. Your main objective is to presented how to build and use an API using Node.js with express. 

<h4>Routes</h4>

Add a new project
``` 
POST '/projects' 

Request Body
{
	"title": "",
	"owner": ""
}
```
List all projects
```
GET '/projects'

Query Params
{
  "title": "",
}
```
Update a project
```
PUT 'projects/:id'

Request Body:
{
	"title": "",
	"owner": ""
}
```
Delete a project
```
DELETE 'projects/:id'
```

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.21.1][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/phenriq694/GoStack_Modulos.git

# Go into the repository
$ cd GoStack_Modulos/level01/backend-nodejs

# Install dependencies
$ yarn 

# Start application
$ yarn dev
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/