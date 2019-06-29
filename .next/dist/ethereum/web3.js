'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Assuming that metamask has already injected web3 into the page
// const web3 = new Web3(window.web3.currentProvider);
// Replacing the above line of code with a variable declaration
// Recall, that whenever we use the 'let' keyword, that means we want to be
// able to reassign this variable in later lines of code.
var web3 = void 0;

// Setting up an if statement:
// First section of the if statement handles the case in which our code is being
// executed inside the browser and metamask is available

// If we run this code inside the browser, we should see the string returned
// from this object
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // First we check to see if we are in the browser, then we check if metamask
  // is injected in the browser -- metamask is running
  web3 = new _web2.default(window.web3.currentProvider); // .web3 to always specify what version of web3 we are using
} else {
  // We are on the server *OR* the user is not running metamask
  // Setting up our own provider through 'infura' and setup our web3 instance
  var provider = new _web2.default.providers.HttpProvider(
  // Pass the url that we had managed previously in our 'deploy.js' script
  // Recall that 'infura' is solely used as a portal to access the ethereum network
  'https://rinkeby.infura.io/v3/33ce9c8fdbae4ee48f469a20c2889ffe' // url that we want to access
  );
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFlBQUo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQ7QUFFMUQ7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBSGlELEFBR3hFLEFBQU8sQUFBcUIsaUJBSDRDLEFBQ3hFLENBRStDLEFBQ2hEO0FBSkQsT0FJTyxBQUNMO0FBQ0E7QUFDQTtNQUFNLGVBQWUsY0FBQSxBQUFLLFVBQVQsQUFBbUIsQUFDbEM7QUFDQTtBQUNBO0FBSGUsa0VBQWpCLEFBQWlCLEFBRzBELEFBRTNFO0FBTGlCO1NBS1YsQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2phc29uL09uZURyaXZlIC0gVW5pdmVyc2l0eSBvZiBJbGxpbm9pcyAtIFVyYmFuYS9BY2FkZW1pYyBUZXJtcy9TdW1tZXIgMjAxOS9FdGhlcmV1bS9raWNrc3RhcnQifQ==