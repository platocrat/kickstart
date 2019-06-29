"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\jason\\OneDrive - University of Illinois - Urbana\\Academic Terms\\Summer 2019\\Ethereum\\kickstart\\components\\Header.js";
// Importing the 'Link' helper so that we can create a linked tag a user can use to actually
// navigate around themselves.

// This begins the react html code
exports.default = function () {
  //
  return (
    // Top level menu = '<Menu>'
    // Subsection menu = '<Menu.Menu>'
    // Adding top level menu custom styling with 'style={}', where the first curly
    // braces denotes that we're about to write a JavaScript expression, and the second
    // is the actual object literal that we're creating

    // Whenever we use a 'Link' tag we have to specify the route that a user should go to if
    // click on this button

    // Note that the '<Link>' tag doesn't add any HTML to the document, instead
    // if anyone clicks on any of the '<Link>' tag's children, it is automatically going to
    // navigate the user around the page. Traditionally, we would use an anchor '<a>' tag to
    // display a nice kind underline effect whenever we use a '<Link>' tag on some plain text.

    // <Link route="/campaigns/new">
    //    <a className="item">+</a>
    // </Link>

    // Notice that the above code block uses a different route
    _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, _react2.default.createElement("a", { className: "item", __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, "CrowdCoin")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, _react2.default.createElement("a", { className: "item", __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, "Campaigns")), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, _react2.default.createElement("a", { className: "item", __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, "+"))))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJMaW5rIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFHVCxBQUFTLEFBQVk7Ozs7O0FBRnJCO0FBQ0E7O0FBR0EsQUFDQTtrQkFBZSxZQUFNLEFBQ25CO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7b0JBQUEsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7a0JBQTFCO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtrQkFBWjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtrQkFBYjtvQkFBQTtBQUFBO09BRkosQUFDRSxBQUNFLEFBR0YsK0JBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtrQkFBcEI7b0JBQUEsQUFDRTtBQURGO3VCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2tCQUFaO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2tCQUFiO29CQUFBO0FBQUE7T0FGSixBQUNFLEFBQ0UsQUFHRiwrQkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtrQkFBWjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtrQkFBYjtvQkFBQTtBQUFBO09BL0JSLEFBb0JFLEFBS0UsQUFLRSxBQUNFLEFBTVQ7O0FBdkNEIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9qYXNvbi9PbmVEcml2ZSAtIFVuaXZlcnNpdHkgb2YgSWxsaW5vaXMgLSBVcmJhbmEvQWNhZGVtaWMgVGVybXMvU3VtbWVyIDIwMTkvRXRoZXJldW0va2lja3N0YXJ0In0=