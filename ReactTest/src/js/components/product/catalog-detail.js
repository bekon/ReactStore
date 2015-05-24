/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('../catalog/add-to-cart.js');
var StoreWatchMixin = require('../../mixins/store-watch-mixin.js');
var Link = require('react-router-component').Link;

function getCatalogItem (component) {
  var thisItem;
  AppStore.getCatalog().forEach(function(element, index){
    if (element.id.toString() === component.props.item) {
      thisItem = element;
    }
  });

  return { item: thisItem };
}

var CatalogDetail = React.createClass({
  mixins: [StoreWatchMixin(getCatalogItem)],
  render: function() {
    return  (
        <div>
          <h2>{this.state.item.title}</h2>
          <img src={this.state.item.img} alt="" />
          <p>{this.state.item.description}</p>
          <p>${this.state.item.cost} <span className="text-success">{this.state.iteminCart && '(' + this.state.item.qty + ' in cart)'}</span></p> 
          <div className="btn-group btn-group-sm">
            <AddToCart item={this.state.item} />
            <Link href='/' className="btn btn-default">Home</Link>
          </div>
        </div> 
      )
  }
});
module.exports = CatalogDetail;