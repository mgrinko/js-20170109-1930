'use strict';

class PhoneCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones || [];

    this._render();

    this._el.addEventListener('click', this._onPhoneClick.bind(this))
  }

  on(eventName, handler) {
    this._el.addEventListener(eventName, handler);
  }

  _trigger(eventName, data) {
    let event = new CustomEvent(eventName, {
      detail: data
    });

    this._el.dispatchEvent(event);
  }

  setData(phones) {
    this._phones = phones;
    this._render();
  }

  _render() {
    let template = document.querySelector('#phone-catalogue-template').innerHTML;

    this._templateFunction = _.template(template);

    this._el.innerHTML = this._templateFunction({
      phones: this._phones
    });

  }

  _onPhoneClick(event) {
    let phoneItemLink = event.target.closest('[data-element="phoneItemLink"]');

    if (!phoneItemLink) {
      return;
    }

    let selectedPhoneItem = phoneItemLink.closest('[data-element="phoneItem"]');

    this._trigger('phoneSelected', selectedPhoneItem.dataset.phoneId);
  }
}