'use strict';

class PhonePage {
  constructor(options) {
    this._el = options.el;

    this._shoppingCart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopingCart"]')
    });

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phoneCatalogue"]'),
      cart: this._shoppingCart
    });
  }
}
