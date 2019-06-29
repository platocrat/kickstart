// Second set of parentheses means that the require statement returns a function
// which will be revoked immediately after we require it into this file.
const routes = require('next-routes')();

// '.add()' function is how we define a new route mapping
// The first argument here is going to be the pattern that we want to look for
// To indicate a wildcard variable in a route, we use ':', a colon, followed by
// the name of that variable -- this variable is eventually going to be passed
// into our component so that we can actually reference whatever campaign address
// the user is trying to visit.

// The second argument is what we are going to show the user once they navigate
// to that page
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

// We need this export statement to export helpers which will eventually allow us
// to automatically navigate users around our app
module.exports = routes;

// Setting a 'server.js' file so that we can manually boot up next app and tell it to use route.js
