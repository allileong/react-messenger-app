# How to Run the Messaging App

In a terminal window:

1. Clone the messenger-app repo
1. `cd messenger-app`
1. `npm install`
1. `npm run server`
1. In a separate terminal window (same directory), run `npm run client`

In a browser window, visit `http://localhost:8080`.

### How to Run Tests

Call `npm run test`

## Design Decisions

### Socket.io

I chose to use Socket.io because it provides a server-side and client-side API for real-time bidirectional communication between browser and server. This is great for a messaging app because as a user, I expect to receive messages from others immediately after they are sent. With alternative communication protocols like HTTP, the server can’t automatically send a message to the client because the server can only respond to client requests. As a result, the client has to poll for new messages from the server, creating a delay between the time when messages are sent and when they are received.

### Javascript

I use TypeScript at my current job, but used JavaScript in this project for the simplified project setup

### Single chat room

I made the chat app one chatroom for all users to reduce the need for user registration and multi-conversation management

## Features that I would like to add

- Ability to see the entire message history when a user joins the chat room
- Ability to delete or edit a message that has been sent
- Indicator that other users are typing
- Ability to customize avatars with images
- Ability to add emojis to message bodies

## Known Issues

- Visiting the `/chat` route directly results in an error. It would be nice to redirect users to the home page
- The current user’s own messages are also sent through the socket, which poses problems if the connection fails. In that case, the user may expect to see the message that she just sent in the message list with an indicator that it was not sent. Instead, her message does not appear at all
- Users can enter the chat room even if they do not enter a first or last name on the registration form. In that case, the current user's avatar label defaults to "ME". If a user that is not the current user does not enter a first or last name, that user's avatar label defaults to ":)". When multiple other users do not enter a first or last name, they all share the same default avatar, making it difficult to distinguish who is contributing what messages to the conversation.
- The message body is currently taking up too small of a percentage of its parent container
- If a new message is added to the conversation and the conversation is long enough to require scrolling, the message window does not automatically scroll to the most recent message that was added
