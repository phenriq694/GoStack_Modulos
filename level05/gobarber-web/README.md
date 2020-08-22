Module Content:

- Configuring Structure: Creating a new project with create-react-app commando, adding ESLint configuration and removing unecessary files;

- Global Style: Configuring the application global style using the lib 'styled-components';

- Login Page: Creating the SignIn Page layout and styles;

- Isolating Components: Refactoring the code and isolating the inputs and button from the signIn page to reuse in other components;

- SignUp Page: Creating the SignUp Page layout and styles;

- Using Unform: How to use the lib 'rocketseat/unform' to create forms and increase the form performance;

- Input Usability: Adding 'onFocus' and 'onBlur' to a div component. The 'useCallback' hook was introduced to memorize functions;

- Registering Validation: Using the lib 'yup' to validate input data;

- Showing Input Errors: Getting validation erros from the lib 'yup' and printing in the Input component;

- Creating tooltip to errors: Creating Tooltip component and styling to shows when an error is ocurred in the input data validation;

- Login Validation: Applying the same configuration of input data validation made in the SignUp page in the SignIn page;

- Enable CORS on the API: Add the lib 'cors' in the backend;

- Context API: Basic information about how to use the 'useContext' hook;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/typescript/react/Hooks/useContext/Basic%20Configuration.md

- Login by context: Adding a singIn method in the AuthContext and use this method the the SignIn page to calling the API and getting session information;

- Keeping user on the storage: Persist the user session by adding the token and user in the localStorage;

- Creating useAuth hook: How to creating a custom hook;

- Logout: Creating a signOut method in the AuthContext;

- Toasts Structure: Creating a Toast component;

- Creating toast hook: Creating a toast context with a hook;

- Adding or Remove Toasts: Creating two functions to add or remove toasts.

- Animating Toast: Using the lib 'react-spring' to animate the toasts;

- Configuring Routes: Add routes configuration in the application with the lib 'react-router-dom'. Adding an amination when changing between the SignIn and SignUp pages;

- Authenticated Routes: Creating a custom Route component and configuring to control if a route is or not private and needs to be logged in;

- Finish the App: Calling the api to register a new user in the SignUp page and redirecting the new user to the SignIn page;


