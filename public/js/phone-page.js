'use strict';

class PhonePage {
  constructor(options) {
    this._el = options.el;

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phoneCatalogue"]')
    });

    this._shoppingCart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopingCart"]')
    });


    setTimeout(() => {
      this._shoppingCart.addItem('1');
    }, 1000);

    setTimeout(() => {
      this._shoppingCart.addItem('1');
    }, 2000);

    setTimeout(() => {
      this._shoppingCart.addItem('1');
    }, 3000);

    setTimeout(() => {
      this._shoppingCart.addItem('1');
    }, 5000);

    setTimeout(() => {
      this._shoppingCart.addItem('1');
    }, 7000);
  }
}
