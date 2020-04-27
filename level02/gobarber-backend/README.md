<h1 align="center">
  <img
    alt="TypeScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="150px"
  />
</h1>
<h2 align="center">
  Starting the GoBarber Back-end
</h2>



Module Content:


### Application Developed

#### Technologies
- TypeScript;
- Express;
- ESLint, Prettier and EditorConfig;
- date-fns;
- uuidv4;
- TypeORM;

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
# Clone this repository
$ git clone https://github.com/phenriq694/GoStack_Modulos.git

# Go into the repository
$ cd GoStack_Modulos/level02/gobarber-backend

# Install dependencies
$ yarn

# Start application
$ yarn dev:server
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
