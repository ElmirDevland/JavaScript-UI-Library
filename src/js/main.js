import $ from './lib/lib';

$('#trigger').click(() =>
  $('#trigger').createModal({
    text: {
      title: 'Modal Title',
      body: 'Lorem Lorem Lorem',
    },
    btns: {
      count: 2,
      settings: [
        ['Close', ['btn-danger', 'mr-10'], true],
        [
          'Save',
          ['btn-success'],
          false,
          () => {
            alert("Life's Good!");
          },
        ],
      ],
    },
  })
);

$('#secondTrigger').click(() =>
  $('#secondTrigger').createModal({
    text: {
      title: 'Modal Title 2',
      body: 'Lorem Lorem Lorem 2',
    },
    btns: {
      count: 3,
      settings: [
        ['Save', ['btn-success'], false],
        ['Close', ['btn-danger', 'ml-10'], true],
        [
          'Another btn',
          ['btn-warning', 'ml-10'],
          false,
          () => alert('Hey yo!'),
        ],
      ],
    },
  })
);
