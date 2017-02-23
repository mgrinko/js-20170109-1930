'use strict';

class PhonePage {
  constructor(options) {
    this._el = options.el;

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phoneCatalogue"]')
    });
  }
}
