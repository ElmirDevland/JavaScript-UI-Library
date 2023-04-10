import $ from '../core';

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.eq = function (i) {
  Array.from(this).filter((e, index) => {
    if (index !== i) delete this[index];
  });
  this[0] = this[i];
  this.length = 1;

  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => item === this[0];
  return childs.findIndex(findMyIndex);
};
