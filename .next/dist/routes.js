'use strict';

// Second set of parentheses means that the require statement returns a function
// which will be revoked immediately after we require it into this file.
var routes = require('next-routes')();

// '.add()' function is how we define a new route mapping
// The first argument here is going to be the pattern that we want to look for
// To indicate a wildcard variable in a route, we use ':', a colon, followed by
// the name of that variable -- this variable is eventually going to be passed
// into our component so that we can actually reference whatever campaign address
// the user is trying to visit.

// The second argument is what we are going to show the user once they navigate
// to that page
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

// We need this export statement to export helpers which will eventually allow us
// to automatically navigate users around our app
module.exports = routes;

// Setting a 'server.js' file so that we can manually boot up next app and tell it to use route.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUIsbUJBR0csQUFISCxJQUdPLEFBSFAsZ0NBR3VDLEFBSHZDLDZCQUlHLEFBSkgsSUFJTyxBQUpQLG9DQUkyQyxBQUozQzs7QUFNQTtBQUNBO0FBQ0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCOztBQUVBIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9qYXNvbi9PbmVEcml2ZSAtIFVuaXZlcnNpdHkgb2YgSWxsaW5vaXMgLSBVcmJhbmEvQWNhZGVtaWMgVGVybXMvU3VtbWVyIDIwMTkvRXRoZXJldW0va2lja3N0YXJ0In0=