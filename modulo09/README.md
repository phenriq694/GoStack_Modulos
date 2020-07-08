<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/85637062-8c925900-b658-11ea-928f-e9b3d69f675b.png" 
    width="150px"
  />

  <p>
    GoBarber Web
  </p>
</h1>

In this module, the front-end of the BootCamp project was developed. During this module, it was possible to practice all the fundamentals and contents of the previous modules and learn new concepts.

Module Content:

- Configured structure: in this class, the front-end to be developed was presented and the new React App was started;

- API adjustment: adding the 'cors' library to the back-end and adjusting some route returns;

- Route configuration: Configuring routes with 'react-router-dom' and adding the application pages with basic structure;

- Reactotron configuration: Adding the Reactotron configuration that must be executed if Reactotron is connected to the application;

- Private Routes: How to configure private routes in the application and prevent users from accessing pages without being logged in

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/routes/Rotas%20Privadas/Rotas%20Privadas.md

- Page Layouts: Creating a layout for authentication pages and another default layout for other pages.

- Global Style: Configuring a global style for the application;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Styled%20Components/Global%20Style.md

- Using Root Import: Configuring root import in the application to enable the use of the '~' character in the 'import' command to refer to the 'src' folder and avoid using multiple '../' to browse the files.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/1.%20Create%20a%20project/Utils/Root%20Import.md

- Auth Style: Style of the authetications pages; 

- Using Unform: Importing and using the lib '@rocketseat/unform' to create a form and avoid the need to create states to control values. 

- Validations: Using the 'yup' lib to insert data validation;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Input%20Validation/Using%20yup.md

- Store Configuration: Initial Redux settings;

- Authentication: Creating an authentication module in redux with a reducer, action and saga to login.

- Store Profile: Creating a user module in redux with a reducer to store user information in the state of the user module;

- Persisting Authentication: Configuring redux to keep the authentication data in the application with 'redux-persist';

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/Persisting%20authentication.md

- Authentication Loading: Adds a loading when the user logs in to the app.

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/Authentication/Authetication%20Loading.md

- Showing Toasts: Adding notifications in the application with 'react-toastify' lib;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Notifications/React%20Toastify.md

- Registering in the application: Configure redux to store a provider in the application;

- Athenticated Requests: Persisting the authentication token in other routes of the application. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/redux/Authentication/Authenticated%20Routes.md

- Configuring Header: creating and styling the Header component;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Componentes/Componentes%20Padr%C3%B5es%20/Configurando%20Header/Configurando%20Header.md

- Notifications Styling: Creating and styling the Notification component; 

- Notifications: Getting all notifications by calling the API and adding with the Notification component;

- Profile Page: Configuring and styling the Profile page;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/P%C3%A1gina%20de%20Perfil%20Padr%C3%A3o/P%C3%A1gina%20de%20Perfil%20Padr%C3%A3o.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/P%C3%A1gina%20de%20Perfil%20Padr%C3%A3o/Recuperando%20dados%20do%20usu%C3%A1rio%20na%20p%C3%A1gina%20de%20perfil.md

- Profile Update: Configuring redux to update the user by calling the API;

- Avatar profile: Adding a field on the profile form to change the user's avatar. This image field can show a preview of the image.

- Header Data: Adding the avatar of the user retrieved from the API in the header component;

- Application Logout: Configuring redux to remove the status of the authentication module to disconnect the user from the application;

- Dashboard Styling: Configuring and styling the Dashboard page;

- Navigation between days: Configuring the component that shows the schedule throughout the day and two buttons to navigate between days;

- Listing Appointments: Getting the appointments by calling the API and loading the data on the Dashboard Page;
