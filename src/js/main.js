import $ from './lib/lib';

function sayHello() {
  console.log('hello');
}

$('.active').removeEvent('click', sayHello);
$('.active').on('click', sayHello);
