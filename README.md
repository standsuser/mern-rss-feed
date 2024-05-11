**RSS Feed Component**

This repository contains a MERN (MongoDB, Express.js, React.js, Node.js) stack implementation for a RSS feed component, accompanied by an API endpoint for retrieving posts.

### Features:

- **API Endpoint**: GET `/posts` endpoint to retrieve posts.
- **Listing Component**: Display a list of posts with the following fields:
  - Post source
  - Post image
  - Post creator
  - Post date and time to read
  - Post title
  - Post short description
  - Post link to the feed source
- **Infinite Scroll Paging**: Supports infinite scroll for paging through the list of posts.
- **Skeleton Loading**: Provides a skeleton loading UI until real data loads.

### Technologies Used:

- **MongoDB**: NoSQL database for storing post data.
- **Express.js**: Web application framework for Node.js to build the API endpoints.
- **React.js**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime environment for server-side logic.
- **CSS**: Styling for the user interface.

### Start the application:
   - `npm run dev` runs both client and server concurrently


![General Look](general_look.png)
