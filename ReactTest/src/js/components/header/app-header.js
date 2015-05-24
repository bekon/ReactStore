/** @jsx React.DOM */
var React = require('react');
var CartSummary = require('./cart-summary.js');

var Header = React.createClass({
  render: function() {
    return (
        <div classname="row">
          <div classname="col-sm-6">
            <h1>Lets Shop</h1>
          </div>

          <div classname="col-sm-2 col-sm-push-3">
            <br />
            <CartSummary />
          </div>
        </div>

      )
  }
});
module.exports = Header;