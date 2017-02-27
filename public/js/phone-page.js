'use strict';

class PhonePage {
  constructor(options) {
    this._el = options.el;

    this._shoppingCart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopingCart"]')
    });

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phoneCatalogue"]'),
    });

    this._catalogue.on('phoneSelected', (event) => {
      this._shoppingCart.addItem(event.detail);
    });

    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/phones/phones.json', true);

    xhr.onload = () => {
      let phones = JSON.parse(xhr.responseText);

      this._catalogue.setData(phones);
    };

    xhr.send();
  }
}
