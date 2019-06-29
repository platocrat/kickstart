'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\jason\\OneDrive - University of Illinois - Urbana\\Academic Terms\\Summer 2019\\Ethereum\\kickstart\\components\\Layout.js';
// importing helper from the 'next.js' library.

// This 'Head' thing right here is a 'component' and we can use it inside of any
// other 'react' 'component'

// If we use any other tags inside of this component, those child tags will be
// automatically moved up to the '<Head>' of our HTML document.

// We can use this '<Head>' tag not only for '<link>' tags or '<script>' tags, but we can
// use this '<Head>' tag to add other things like '<Meta>' tags for
// Search Engine Optimization (SEO) purposes.

// Importing 'Header.js' file with its components

// Where we're going to house all of our layout for all of our pages
// Recall that our functional components get called with the 'props' argument inside
// of the return statement
exports.default = function (props) {
  // don't expect to need any helper functions

  // WHere 'Header.js' provides us with the '<Header>' tag
  // Next, adding 'Container' component to add constraint to sizing of components and giving us some
  // white space on each side
  return (
    // We know that the 'Layout.js' component will always be rendered with 'next.js'
    // Must move the '<link>' tag to the 'Layout.js' component

    // In order to preserve styling when navigating to different pages and to
    // other directories to grab other JavaScript files to use, we must
    // move the '<link>' code block to the 'Layout.js' file and place it under the
    // '<Head>' tag block.

    //
    _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, _react2.default.createElement(_semanticUiReact.Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, _react2.default.createElement(_head2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, _react2.default.createElement('link', {
      rel: 'stylesheet',
      href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    })), _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }), props.children))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFZVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7Ozs7O0FBYm5COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBLEFBQ0E7a0JBQWUsaUJBQVMsQUFDdEI7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7b0JBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUE7V0FDRSxBQUNNLEFBQ0o7WUFGRixBQUVPOztrQkFGUDtvQkFGSixBQUNFLEFBQ0UsQUFNRjtBQU5FO0FBQ0UseUJBS0osQUFBQzs7a0JBQUQ7b0JBUkYsQUFRRSxBQUNDO0FBREQ7QUFBQSxjQW5CSixBQVVBLEFBQ0UsQUFTUyxBQUlaOztBQTlCRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvamFzb24vT25lRHJpdmUgLSBVbml2ZXJzaXR5IG9mIElsbGlub2lzIC0gVXJiYW5hL0FjYWRlbWljIFRlcm1zL1N1bW1lciAyMDE5L0V0aGVyZXVtL2tpY2tzdGFydCJ9