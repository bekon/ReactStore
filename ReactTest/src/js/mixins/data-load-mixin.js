/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');

var DataLoadMixin = function (cb) {
  return {
    componentWillMount: function() {
      cb(this);
    }
  };
};

module.exports = DataLoadMixin;