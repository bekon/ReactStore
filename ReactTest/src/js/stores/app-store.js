var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('merge');
var restful = require('restful.js');
var api = restful('jsonplaceholder.typicode.com');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _catalog = [];


/*for (var i =1; i <10; i++) {
  _catalog.push({
    id: '00' + i,
    title: 'Widget #' + i,
    summary: 'This is best widget',
    description: 'Long long egpegne  texte gerg ergr ',
    img: '/assets/product.jpg',
    cost: i
  });
}*/

var _cartItems = [];

function _removeItem(index) {
  console.log(index)
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem (index) {
  _cartItems[index].qty++;
}

function _decreaseItem (index) {
  if (_cartItems[index].qty > 1) {
    _cartItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}

function _addItem (item) {
  if (!item.inCart) {
    item.qty = 1;
    item.inCart = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function (cartItem, index) {
      if (cartItem.id === item.id) {
       _increaseItem(index); 
      }
    });
  }
}

function _cartTotals () {
  var qty = 0, total = 0;
  _cartItems.forEach(function (item) {
    qty += item.qty;
    total += item.qty * item.cost;
  });
  return { qty: qty, total: total };
}

var AppStore = merge(EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart: function () {
    return _cartItems;
  },

  getCartTotals: function () {
    return _cartTotals();
  },

  getCatalog: function () {
    return _catalog;
  },

  fetchData: function () {
    api.one('albums', 1).all('photos').getAll().then(function (response) {
      _catalog = response.body().map(function (item, index) {
        var d = item.data();
        return {
          id: d.id,
          img: d.thumbnailUrl,
          description: 'Long long egpegne  texte gerg ergr ',
          title: 'Widget #' + index,
          cost: index,
          summary: d.title
        }
      });
      AppStore.emitChange();
    });
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.index);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index);
        break;
    }
    AppStore.emitChange();

    return true;
  })
})

module.exports = AppStore;