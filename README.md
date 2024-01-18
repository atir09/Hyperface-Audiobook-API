# AudioBooks/Courses Backend API Documentation

## Introduction

This document provides comprehensive information about the backend API for managing AudioBooks and Courses. The API is built using Node.js, Express, and MongoDB. It incorporates features such as authentication, authorization, password hashing, and various endpoints for managing users, courses, and audiobooks.

## Authentication and Authorization

The API utilizes authentication to secure user access. Users must register and log in to perform certain actions. Additionally, authorization is implemented to ensure that users have the appropriate permissions for specific operations.

### Endpoints

- **POST /users/register**
  - Registers a new user.
  - Payload: `{username, email, password}`.
  
- **POST /users/login**
  - Logs in an existing user.
  - Payload: `{email, password}`.

## User Management

### Endpoints

- **GET /users**
  - Retrieves all users.

- **GET /users/:userID**
  - Retrieves a single user by their ID.

- **PUT /users/:userID**
  - Updates a user's information.
  - Payload: `{field to be updated}`.

- **DELETE /users/:userID**
  - Deletes a user by their ID.

- **POST /users/:userID/favorites**
  - Marks a course as a favorite for a user.
  - Payload: `{courseId}`.

- **DELETE /users/:userID/favorites**
  - Removes a course from a user's favorites.
  - Payload: `{courseId}`.

## Course Management

### Endpoints

- **POST /courses**
  - Creates a new course.
  - Payload: `{title, instructor, length, description, coverImage, contents}`.

- **GET /courses**
  - Retrieves all courses.

- **GET /courses/:courseId**
  - Retrieves a single course by its ID.

- **PUT /courses/:courseId**
  - Updates a course's information.
  - Payload: `{field to be updated}`.

- **DELETE /courses/:courseId**
  - Deletes a course by its ID.

- **POST /courses/:courseId/audiobooks**
  - Adds an audiobook to a course.
  - Payload: `{audiobookId}`.

- **DELETE /courses/:courseId/audiobooks**
  - Removes an audiobook from a course.
  - Payload: `{audiobookId}`.

## Audiobook Management

### Endpoints

- **POST /audiobooks**
  - Creates a new audiobook.
  - Payload: `{title, author, narrator, length, categories, summary, coverImage, audioFileURL}`.

- **GET /audiobooks**
  - Retrieves all audiobooks.

- **GET /audiobooks/:audiobookId**
  - Retrieves a single audiobook by its ID.

- **PUT /audiobooks/:audiobookId**
  - Updates an audiobook's information.
  - Payload: `{field to be updated}`.

- **DELETE /audiobooks/:audiobookId**
  - Deletes an audiobook by its ID.

## Error Handling

The API follows standard HTTP status codes and provides informative error messages in the response payload for easier debugging.

## Conclusion

This documentation outlines the various endpoints and functionalities of the AudioBooks/Courses backend API. For any additional information or support, please refer to the API documentation or contact the development team.
