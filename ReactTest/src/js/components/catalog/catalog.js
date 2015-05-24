/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('./add-to-cart.js');
var CatalogItem = require('./catalog-item');
var StoreWatchMixin = require('../../mixins/store-watch-mixin.js');
var DataLoadMixin = require('../../mixins/data-load-mixin.js');

function getCatalog () {
  return { items: AppStore.getCatalog() }
}

var Catalog = React.createClass({
  mixins: [StoreWatchMixin(getCatalog), DataLoadMixin(AppStore.fetchData)],
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return <CatalogItem item={item} />
    });
    return (
      <div className="row">
      {items}
      </div>
    );
  }
});

module.exports = Catalog;