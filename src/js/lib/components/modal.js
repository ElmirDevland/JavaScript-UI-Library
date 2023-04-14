import $ from '../core';

$.prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = $(this[i]).getAttr('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(300);
      document.body.style.overflow = 'hidden';
    });

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach((btn) => {
      $(btn).click((e) => {
        $(target).fadeOut(300);
        document.body.style.overflow = '';
        if (created)
          setTimeout(() => {
            document.querySelector(target).remove();
          }, 500);
      });
    });

    $(target).click((e) => {
      if (e.target.classList.contains('modal')) {
        $(target).fadeOut(300);
        document.body.style.overflow = '';
        if (created)
          setTimeout(() => {
            document.querySelector(target).remove();
          }, 500);
      }
    });
  }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      const { settings } = btns;
      const btn = document.createElement('button');

      btn.textContent = settings[j][0];
      btn.classList.add('btn', ...settings[j][1]);
      if (settings[j][2]) btn.setAttribute('data-close', true);
      if (settings[j][3] && typeof settings[j][3] === 'function')
        btn.addEventListener('click', settings[j][3]);

      buttons.push(btn);
    }

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">${text.title}</div>
                </div>
                <div class="modal-body">${text.body}</div>
                <div class="modal-footer"></div>
            </div>
        </div>
    `;

    modal.querySelector('.modal-footer').append(...buttons);
    document.body.append(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute('data-target')).fadeIn(300);
  }
};
