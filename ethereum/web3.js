import Web3 from 'web3';

// Assuming that metamask has already injected web3 into the page
// const web3 = new Web3(window.web3.currentProvider);
// Replacing the above line of code with a variable declaration
// Recall, that whenever we use the 'let' keyword, that means we want to be
// able to reassign this variable in later lines of code.
let web3;

// Setting up an if statement:
// First section of the if statement handles the case in which our code is being
// executed inside the browser and metamask is available

// If we run this code inside the browser, we should see the string returned
// from this object
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined')  {
  // First we check to see if we are in the browser, then we check if metamask
  // is injected in the browser -- metamask is running
  web3 = new Web3(window.web3.currentProvider);  // .web3 to always specify what version of web3 we are using
} else {
  // We are on the server *OR* the user is not running metamask
  // Setting up our own provider through 'infura' and setup our web3 instance
  const provider = new Web3.providers.HttpProvider(
    // Pass the url that we had managed previously in our 'deploy.js' script
    // Recall that 'infura' is solely used as a portal to access the ethereum network
    'https://rinkeby.infura.io/v3/33ce9c8fdbae4ee48f469a20c2889ffe'          // url that we want to access
  );
  web3 = new Web3(provider);
}

export default web3;
