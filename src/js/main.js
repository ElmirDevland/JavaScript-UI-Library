import $ from './lib/lib';

$('#first').click(() => {
  $('.container').find('div').eq(0).fadeToggle(600);
});

$('[data-count="second"]').click(() => {
  $('.container').find('div').eq(1).fadeToggle(600);
});

$('button')
  .eq(2)
  .click(() => {
    $('.w-500px').fadeToggle(600);
  });
