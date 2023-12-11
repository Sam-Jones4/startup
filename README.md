# startup
My startup application designed in CS 260.

Course notes found in [here](/notes.md).

# Web Chat Me

## Description Deliverable

### Elevator Pitch

Messaging today seems easy. Technology is advancing rapidly– we send quick texts to loved ones in seconds. However, even with the easy access, we still run into problems. iPhone users get annoyed with green texts, and Android users get annoyed with iPhone users. Computers can link to phones but it's not as simple and easy as people would like. Web Chat Me is here to build unity in the instant message space. You can message all of the important people in your life from one platform that's identical across all devices. Easily connect with others without any drama. No more bias, no more bickering, lots more benefits. Log in today!

### Design

![Mock](WebChatMeDesign.jpg)

### Key Features

 - Secure login over HTTPS
 - Ability to send messages to other users
 - Display of messages
 - Sidebar displaying all conversations
 - Ability to set profile picture to be seen by other users
 - Messages and data are safely stored

### Technologies

I am going to use the required technologies in the following ways:

 - **HTML** - Uses correct HTML structure for application. Three HTML pages, for login, messages, and profile page.
 - **CSS** - Application styling properly adjusts to different screen sizes. Application uses good whitespace, color choice and contrast.
 - **JavaScript** - Provides login, sending messages, displaying other users' messages, and backend endpoint calls.
 - **Service** - Backend service with endpoints for:
    - Login
    - Retrieving messages
    - Sending messages
 - **DB** - Stores users, messages, and profile data.
 - **Login** - Register and login users. Credentials stored securely in database. Can't send or receive messages unless authenticated.
 - **WebSocket** - As a user sends a message, the other user receives the message.
 - **React** - Application ported to use the React framework.

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

 - **HTML Pages** - Three HTML pages representing the ability to login, send chats, receive chats, view recent chats, and set a profile picture.
 - **Links** - The Login page automatically links to the Chat page. From the Chat and Profile pages, a user can navigate to the other page or sign out using a menu.
 - **Text** - Messages will be sent and received in a text format.
 - **Images** - A user will have a profile picture. There are image icons throughout the website for easier understanding.
 - **Login** - Input boxes for username and password, and a submit button for login.
 - **Database** - The database will store messages sent and received, as well as a user's profile picture and recent chat history.
 - **WebSocket** - Users will send and receive messages to one another in realtime.

## CSS Deliverable

For this deliverable I styled the application into its final appearance.

 - **Header, footer, and main content body**
 - **Navigation elements** - I built out a nav bar and changed the header colors.
 - **Responsive to window resizing** - My app will resize based on the screen size of the device.
 - **Application elements** - Used good contrast and whitespace.
 - **Application text content** - Used a consistent font.
 - **Application Images** There are search and text icons, as well as a default profile picture if the user doesn't upload one (to be implemented later)

## JavaScript Deliverable

For this deliverable, I added some JavaScript to support future technologies and the application's functionality.

 - **Login** - When you press enter or the login button it takes you to the chat page.
 - **Database** - Added things to store the username and password locally, which will be replaced later. I will also use the databse later to store messages and the profile picture.
 - **WebSocket** - Later, the WebSocket will allow you to send messages to other users
 - **Application logic** - The chat.js file handles logic applying to sent and received messages.

## Service Deliverable

For this deliverable, I added endpoints to send and receive messages.

 - **Node.js/Express HTTP Service** - Done
 - **Static Middleware for the frontend** - Done
 - **Calls to third-party endpoints** - Done
 - **Backend Service Endpoints** - Done
 - **Frontend Calls Service Endpoints** - Done

## Database Deliverable

## Login Deliverable

## Websocket Deliverable

## React Deliverable
