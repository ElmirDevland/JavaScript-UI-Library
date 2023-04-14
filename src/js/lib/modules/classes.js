import $ from '../core';

$.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList && classNames) this[i].classList.add(...classNames);
    else return this;
  }
  return this;
};

$.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList && classNames)
      this[i].classList.remove(...classNames);
    else return this;
  }
  return this;
};

$.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList && className) this[i].classList.toggle(className);
    else return this;
  }
  return this;
};
