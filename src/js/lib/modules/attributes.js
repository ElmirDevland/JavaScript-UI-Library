import $ from '../core';

$.prototype.setAttr = function (attrName, value = '') {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attrName, value);
  }
};

$.prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attrName);
  }
};

$.prototype.toggleAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    this[i].toggleAttribute(attrName);
  }
};

$.prototype.hasAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attrName)) {
      return true;
    } else false;
  }
};

$.prototype.getAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    return this[i].getAttribute(attrName);
  }
};
