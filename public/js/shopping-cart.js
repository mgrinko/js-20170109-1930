'use strict';

class ShoppingCart {
  constructor(options) {
    this._el = options.el;

    this._orderItems = [];

    this._render();
  }

  _render() {
    let template = document.querySelector('#shopping-cart-template').innerHTML;

    this._templateFunction = _.template(template);

    this._el.innerHTML = this._templateFunction({
      orderItems: this._orderItems
    });
  }

  addItem(item) {
    this._orderItems.push(item);
    this._render();
  }
}