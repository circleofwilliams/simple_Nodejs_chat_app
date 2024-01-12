# A SIMPLE NODE.js GROUP CHATTING APP
This application was built as a means of testing my knowledge after watching a nodejs stream and networking video.

## DESCRIPTION OF THE APP
The application has two units, the client and the server.
The client serves as the connecting point for users to the server, all connected user can communicate in real time and active users are notified when a new user joins or leaves the chat.

The UI is not that great because the focus was on understanding and using javascript to talk to the computer with the help of nodejs.

There are no external npm packages or third packages used in this project.

## STEPS:

1.  created a basic tcp server
2.  created a basic client
3.  created an interface so i can read from the client console and send to the server.
4.  made the server log the recieved message on the console to confirm i am getting the correct message.
5. made the server send back the recieved message to the client (it will be to multiple clients later.)