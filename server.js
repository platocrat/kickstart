const { createServer } = require('http');
const next = require('next');

const app = next({
  // Passing a configuration object here, with the single property of 'dev',
  // 'dev' flag specifies whether we are running our server in production or development mode.

  // Tells our app to look at a global environment variable called node environemnt
  // and look to see if its set to the string 'production' and if it is, then our app
  // must be running in production mode, and its going to change the way next behaves
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
// Passing in the 'app' object
const handler = routes.getRequestHandler(app);

// Setting up app and telling it to listen on a specific port
app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    // If statement to throw an error if the server cannot be created
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});
