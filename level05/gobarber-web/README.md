Module Content:

- Introduction: In this class the layouts of the pages that you will be developed was presented;

- Using Query Params: Fixing controllers that were receiving the request data via body and not via query;

- Appointments in the same time: In the back-end, if a user tried to create an appointment in the same date, but with a another provider, the API was returning an error. In this class, this problema was fixed by adding the 'provider_id' attribute in the method that did this query in the database;

- Unavailable day on month: When listing all available days in a month, the API was returning true eveing for past days. In this class, this problem was fixed by adding the 'isAfeter' method from the 'date-fns' lib when the retuning all the available days;

- Appointments Clients: Returning the user information when a provider list yours appointments;

- Serielization in cache: Add 'classToClass' when the response is added in the cache;

- Organized Insomnia: Creating folders and organizing the requests;

- Creating recover page: Creating the ForgotPassword page;

- Sending a form to the API: Sending the form data from the ForgotPassword page to the API;

- Creating Reset Page: Creating the ResetPassword page;

- Implementing Reset: Sending the form data from the ResetPasswrod page to the API;

- Creating Header: Creating Header of the Dashboard page;

- Next Appointment: Creating and styling the HTML elements of the next appointment in the Dashboard page;

- Apointments List: Creating and styling the HTML elements of the other appointments in the Dashboard page;

- Calendar and styling: Adding a calendar in the Dashboard page with the lib 'react-day-picker';

- Month Availability: Getting the available days by calling the API and adding to the calendar;

- API Appointments: Parsing the dates retriving from the API using the 'date-fns' lib and calling the API route that returns all the provider appointment from a specific day;

- Showing Appointments: Add the listing of appointments returned of the API in the Dashboard page;

- Finishing Appointment list: Retriving the next appointment based in the current time and add in the dashboard page;

- Profile page: Creating and styling the Profile page;

- Avatar Change: Adding a file input in the Profile page to update the user avatar sending the new image to the API;

- Data Update: Adding the connection with the update profile route from the API and sending the data;
