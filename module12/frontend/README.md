<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/88598048-ed89c400-d03e-11ea-93f2-ac1d509960f8.png" 
    width="150px"
  />

  <p>
    React Tests
  </p>
</h1>

## Tests
### TechList.test.js
- 'should be able to add new tech';
- 'should store techs in storage';
### ShopList.test.js
- 'should render shop list';
- 'should be able to add new item';
### store/reducers/items.test.js
- 'DEFAULT';
- ADD_ITEM';
### store/sagas/items.test.js
- 'should be able to fetch items';
- 'should fail when api returns error';

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
cd module12/frontend

# Install dependencies
yarn

# Start test 
yarn test

# Generate coverage
yarn coverage
``` 

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/