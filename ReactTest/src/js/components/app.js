/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./catalog/catalog.js');
var Cart = require('./cart/cart.js');
var Router = require('react-router-component');
var CatalogDetail = require('./product/catalog-detail.js');
var Template = require('./app-template.js');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function() {
    return (
        <Template>
          <Locations>
            <Location path="/" handler={Catalog} />
            <Location path="/cart" handler={Cart} />
            <Location path="/item/:item" handler={CatalogDetail} />
          </Locations>
        </Template>
      )
  }
});

module.exports = App;