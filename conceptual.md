### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Asynchronous code in JavaScript can be managed using callbacks, promises, async/await, and event-driven programming.

- What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation, typically used for handling asynchronous computations and coordinating multiple asynchronous operations.

- What are the differences between an async function and a regular 
function?

An async function is a function that operates asynchronously via the use of the async keyword, allowing the use of the await keyword inside it to pause execution until promises are settled. Regular functions, on the other hand, execute synchronously, blocking further code execution until they complete.

- What is the difference between Node.js and Express.js?

Node.js is a runtime environment that executes JavaScript code outside a web browser, typically used for server-side programming. Express.js is a web application framework for Node.js, providing features for building web applications, APIs, and handling HTTP requests and responses.


- What is the error-first callback pattern?

The error-first callback pattern is a convention in Node.js where callback functions used in asynchronous operations take an error object as the first parameter.

- What is middleware?

Middleware refers to functions in Express.js that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can perform tasks such as logging, authentication, and modifying request or response objects.

- What does the `next` function do?

The next function in Express.js is used inside middleware functions to pass control to the next middleware function in the application's request-response cycle. It is typically called to move the request to the next middleware or route handler.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

Issues with the code include performance concerns due to sequential API calls using await, which can be slower than parallel calls. Additionally, the naming convention for variables (elie, joel, matt) could be improved for clarity. A more efficient approach would involve using Promise.all to make parallel API calls, enhancing performance.
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
