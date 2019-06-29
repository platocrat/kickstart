'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\jason\\OneDrive - University of Illinois - Urbana\\Academic Terms\\Summer 2019\\Ethereum\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // Defining function which contains the logic to approve a given request


  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      // ONly probably care about `Row` and `Cell` from `Table` object.
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      // Destructuring to shorthand expression of `this.props`

      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;
      // looks

      var readyToFinalize = request.approvalCount > approversCount / 2;
      // Inside of `Row` component is going to be a collection of different cells
      // where each cell represents one different property of a request.
      return (
        // `disabled={request.complete}` is used to grey approval requests that
        // have already been finalized.
        _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, id), _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, request.description), _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, request.recipient), _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, request.complete ? null :
        // if requests.complete is `true`, return the value `null`
        // if requests.complete is `false`, return the entire button below.
        _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, 'Approve')), _react2.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, request.complete ? null :
        // if requests.complete is `true`, return the value `null`
        // if requests.complete is `false`, return the entire button below.
        _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, 'Finalize')))
      );
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O29OLEFBRUoscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSx5QkFDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjs4QkFEM0I7cUJBR2EsY0FBQSxBQUFLLElBSGxCLEFBR2EsQUFBUzs7aUJBQTFCO0FBSEksa0NBQUE7OEJBQUE7cUJBSUosU0FBQSxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFDSCxLQUFLLEVBQUUsTUFBTSxTQUxOLEFBSUosQUFDRSxBQUFRLEFBQVM7O2lCQUxmO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZSxBQVFaLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNMO0FBREsseUJBQ00sd0JBQVMsTUFBQSxBQUFLLE1BRHBCLEFBQ00sQUFBb0I7K0JBRDFCO3FCQUdZLGNBQUEsQUFBSyxJQUhqQixBQUdZLEFBQVM7O2lCQUExQjtBQUhLLG1DQUFBOytCQUFBO3FCQUlMLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFDSCxLQUFLLEVBQUUsTUFBTSxTQUxMLEFBSUwsQUFDRSxBQUFRLEFBQVM7O2lCQUxkO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0E7QUFUYjs7Ozs7OzZCQWlCUyxBQUNQO0FBRE87VUFBQSxBQUVDLE1BRkQsQUFFZSx1QkFGZixBQUVDO1VBRkQsQUFFTSxPQUZOLEFBRWUsdUJBRmYsQUFFTSxBQUNiO0FBSE87O21CQUlpQyxLQUpqQyxBQUlzQztVQUp0QyxBQUlDLFlBSkQsQUFJQztVQUpELEFBSUssaUJBSkwsQUFJSztVQUpMLEFBSWMsd0JBSmQsQUFJYyxBQUNyQjtBQUNBOztVQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWdCLGlCQUFoRCxBQUFpRSxBQUNqRTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7d0JBQUMsY0FBRCxPQUFLLFVBQVUsUUFBZixBQUF1QixVQUFVLFVBQVUsbUJBQW1CLENBQUMsUUFBL0QsQUFBdUU7c0JBQXZFO3dCQUFBLEFBQ0U7QUFERjsyQkFDRyxjQUFEOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxXQURGLEFBQ0UsQUFDQSxxQkFBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxtQkFGRixBQUVFLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSx5QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHBDLEFBR0UsQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxtQkFKRixBQUlFLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxtQkFBQSxBQUFlLGVBQWdCLEtBTGpDLEFBS0UsQUFDQSxpQ0FBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUNHO0FBREg7QUFBQSxtQkFDRyxBQUFRLFdBQVIsQUFBbUIsQUFDcEI7QUFDQTtBQUNBO3dCQUFBLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQztzQkFBMUM7d0JBQUE7QUFBQTtXQVZKLEFBTUUsQUFJRSxBQUlGLDZCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLG1CQUNHLEFBQVEsV0FBUixBQUFtQixBQUNsQjtBQUNBO0FBQ0E7d0JBQUEsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUFTLEtBQXBDLEFBQXlDO3NCQUF6Qzt3QkFBQTtBQUFBO1dBckJSLEFBR0UsQUFjRSxBQUlJLEFBS1Q7Ozs7OztBQUdILEEsQUF4RHlCOztrQkF3RHpCLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9qYXNvbi9PbmVEcml2ZSAtIFVuaXZlcnNpdHkgb2YgSWxsaW5vaXMgLSBVcmJhbmEvQWNhZGVtaWMgVGVybXMvU3VtbWVyIDIwMTkvRXRoZXJldW0va2lja3N0YXJ0In0=