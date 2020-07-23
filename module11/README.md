<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/88252309-0895b600-cc84-11ea-836d-daa3cc967f16.png" 
    width="150px"
  />

  <p>
    Node Tests
  </p>
</h1>

In this module, the testing concepts were presented. We developed a basic API REST using the lib 'jest' to test the application. 

Module Content:

- Testing Concepts: Why testing the application and how to do it;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Tests/README.md

- Project Configuration: Starting a node project using the @rocketseat/omni template;

- Configuring Jest: How to add the 'jest' lib in the application and create a basic test; 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Tests/Jest/1.%20Jest%20Configuration.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Tests/Jest/2.%20Creating%20Basic%20Test.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Tests/Jest/jest.config.js

- Environment Variables: How to configure a .env file to use in the tests. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Tests/Jest/3.%20Environment%20Variables.md

- Create User Tests: How to create a basic integration test and analyse the results of code coverage; 

- Duplicate E-mail: Adding a new test to check if an email is already registered in the data database. Also, a function was created to clean the database after each test run, to avoid inteferenece between the tests results; 

- Password Encrypt: Adding test to verify that the user's password has been encrypted;

- Generating Random Data: How to use the libs 'factory-girl' and 'faker' to generating random data to use in the tests; 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Tests/Jest/Random%20Data.md


## Tests
### user.test.js
- should encrypt user password when new user created; 
- should be able to register;
- should not be able to register with duplicated email;

## Libs
- jest;
- dotenv;
- bcryptjs;
- factory-girl;
- faker;

## ORM
- Sequelize;

## Database
- sqlite3;

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
cd module11/server

# Install dependencies
yarn

# Start test 
yarn test
``` 

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/