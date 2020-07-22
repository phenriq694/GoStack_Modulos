<h1 align="center">
  <img 
    alt="" src="https://user-images.githubusercontent.com/54601930/87108108-d9208b80-c237-11ea-980a-442177a97f2d.png" 
    width="150px"
  />

  <p>
    GoBarber Mobile
  </p>
</h1>

In this module, the mobile of the BootCamp project was developed. During this module, it was possible to practice all the fundamentals and contents of the previous modules and learn new concepts.

## Application Developed

### [Back-end][backend]:
- [Routes][routes];
- [Libs][libs];
- [ORM][orm];
- [Databases][databases];
- [Tools and Services][tools&services];
- [How To Use][howToUse];

[backend]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend
[routes]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend#routes
[libs]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend#libs
[orm]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend#orm
[databases]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend#databases
[tools&services]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend#tools-and-services
[howToUse]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/backend#information_source-how-to-use

### [Front-end][frontend]:
- [Application Developed][application];
- [Pages][pages];
- [How To Use][howToUse];

[frontend]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/frontend
[application]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/frontend#application-developed
[pages]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/frontend#pages
[howToUse]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/frontend#information_source-how-to-use

### [Mobile][mobile]:
- [Application Developed][application];
- [Pages][pages];
- [How To Use][howToUse];

[mobile]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/mobile
[application]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/mobile#application-developed
[pages]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/mobile#pages
[howToUse]: https://github.com/phenriq694/GoStack_Modulos/tree/goStack_modulos_2019/module10/mobile#information_source-how-to-use

## Module Content:
- Structure Configured: Start the project with basic configurations;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react-native/1.%20Criando%20um%20projeto/1.%20Criando%20um%20projeto.md

- Configuring Root Import: How to configure the root import feature in React Native;

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react-native/1.%20Criando%20um%20projeto/utils/Root%20Import.md

- Autheticated Routes: Configuring react navigation and add the application routes;

- Background Configuration: Adding the 'react-native-linear-gradiente' lib to add a gradient effect in the background of the 'SignIn' page. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react-native/M%C3%B3dulos/react-native-linear-gradient/react-native-linear-gradient.md

- Input & Button: Creating a Button and an Input component and adding to the SingIn page; 

- SignIn Page: Configuring and styling the SignIn page;

- SignUp Page: Configuring and styling the SignUp page;

- Configuring StatusBar: Change the color of the Status Bar;

- Accessibility Tips: Using some attributes and the ref attribute to reference the form inputs and change their behavior when the device's return button is touched;

- Reactotron: Connecting Reactotron with the application;

- Configuring Redux: Creating all configuration files to add the redux in the application; 

- Connecting Redux: Adding the redux configuration in the SignIn and SignUp pages to calling the API and store the data. 

- Initial Route: Changing the 'routes.js' file to return a route depending if the user is logged in or not. 

- Styling routes: Creating Profile page and styling it and the Dashboard page;

- Appointments List: Creating and Styling an Appointment component and add it to a list on the Dashboard page;

- Appointment from API: Listing all appointments by calling the API; 

- Profile Updated: Adding components to the Profile page and calling the API to obtain and display the user's current name and email address. Also calling the API to update the user's profile data;
                 
- Logout: Adding a logout button on the Profile page. When clicked it's dispatches an action that changes the auth token to null and the signin value to false, logging the user out;

- Appointment Routes: Create SelectProvider, SelectDateTime and Confirm pages; 

- Listing Providers: Getting all providers by calling the API and listing on the SelectProvider page;

- DatePicker por plataforme: Creating a component called DateInput with two index files, one for android and one for ios. Each of them has its DatePicker component. It was configured and stylized; 

- Selecting Appointment Hour: Listing the avaiable hours of the provider on the SelectDateTime page;

- Appointment Cofirm: Configuring the Confirm page and calling the API to create new appointments;

- Appointment Load: Configuring the Dashboard page to reload every time it is accessed, reloading all content and loading the new appointments. 
