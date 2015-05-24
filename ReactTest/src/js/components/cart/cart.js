/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var RemoveFromCart = require('./remove-from-cart.js');
var IncreaseItem = require('./increase-item.js');
var DecreaseItem = require('./decrease-item.js');
var StoreWatchMixin = require('../../mixins/store-watch-mixin.js');
var Link = require('react-router-component').Link;

function getCart () {
  return { items: AppStore.getCart()}
}

var Cart = React.createClass({
  mixins: [StoreWatchMixin(getCart)],
  render: function() {
    var total = 0;

    var items = this.state.items.map(function(item, i) {
      var subtotal = item.cost * item.qty;
      total+= subtotal;
      return (<tr key={i}>
        <td>
          <RemoveFromCart index={i} />
        </td>
        <td>{item.title}</td>
        <td>{item.qty}</td>
        <td>
          <IncreaseItem index={i} />
          <DecreaseItem index={i} />
        </td>
          <td>${subtotal}</td>
        </tr>)
    });
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Qty</th>
              <th></th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
        <Link href='/'> Continue shopping</Link>
      </div>
    );
  }
});

module.exports = Cart;