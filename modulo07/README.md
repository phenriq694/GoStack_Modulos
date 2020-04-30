<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://user-images.githubusercontent.com/54601930/79169629-4c466d00-7dc3-11ea-8075-a2644b91f42d.png" 
    width="150px"
  />
</h1>
<h2 align="center">
  Flux Architecture
</h2>

In this module, the concepts of Redux and how to apply in a real use case were presented. An application was developed to demostrate how to implement Redux e the problems it solves. 

Module Content:

- Redux Concepts: What is Redux and how it works. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/README.md

- Project structure: Introduction to the application that will be developed in this module and where Redux will be used.

- The next five classes were about the developing the application using concepts presented in previous ReactJS modules, such as: Configuring routes, Global styles, Create Header, Stylization of the Home Page, Stylization of the Cart Page.

- Configuring API: How to use the lib 'json-server' to create a fake API for testing without setting a entire backend. 

- Getting products from API: Acessing the API and retrieving products to render.

- Configuring Redux: How to set up the firsts step to use Redux.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/Configuration.md

- Adding to cart: In this class, I learned how to connect a component to redux, how to dispatch an action, listen the action in the reducer and connect another component to redux to get reducer's state data.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/2.%20Connect%20a%20Component.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/3.%20Reducer%20Configuration.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/4.%20Sending%20actions%20from%20the%20component.md
  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/5.%20Get%20data%20from%20a%20reducer.md

- Reactotron + Redux: How to connect Reactotron to React and Redux to debug the application.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Tools/Reactotron.md

- Listing products in the cart: In this class we return the products added to the redux state on the cart page and add a new attribute to the product, before being added to redux state, called 'amount' to control the number of products of the same type added to cart. 

- Duplicate Product: In this class, we use the lib 'immer' to manipulate the reducer state respecting the principles of immutability; 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/Using%20immer%20to%20handle%20with%20immutables%20objects.md
  
- Remove product: Adding the feature to remove a product from the cart wiht a new action 'REMOVE_TO_CART';

- Refactoring the Actions: In this class, a file only for the actions was created and were converted, in the component in which they are being used, to component props;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/6.%20Refactoring%20Actions.md

- Changing the amount: adding a new action to update the amount of a product;

- Calculating totals: Calculating procduct values and passing attributes to the component props to do the rendering;

- Displaying amounts: showing the total of a product added to the cart; 

- Configuring Redux Saga: how to add redux saga in the react application to intercept actions, process data and trigger another action; 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/redux-saga/1.%20Configuration.md


Aplicação desenvolvida: RocketShoes 
Exemplo de e-commerce compartilhando informações entre páginas. 

![modulo7](https://user-images.githubusercontent.com/54601930/69002519-a9e79380-08cf-11ea-83cf-42954307dfb2.gif)
