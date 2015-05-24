/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/store-watch-mixin.js');

function CartTotals () {
  return AppStore.getCartTotals();
}

var Summary = React.createClass({
  mixins:[StoreWatchMixin(CartTotals)],
  render: function() {
    return (
      <div>
        <Link
          href="/cart"
          className="btn btn-success">
          Cart items: {this.state.qty}/ ${this.state.total}
        </Link>
      </div>
      )
  }
});
module.exports = Summary;