'use strict';

const paths = [
  '#about',
  '#others',
  '#puppy'
];

const hideAllContent = () => {
  paths.forEach((path) => {
    $(`${path}`).addClass('hidden');
  });
};

const showContent = (path) => {
  $(`${path}`).removeClass('hidden');
};

const registerPaths = () => {
  paths.forEach((path) => {
    $(`a[href="${path}"]`).on('click', (event) => {
      event.preventDefault();

      hideAllContent();
      showContent(path);
    });
});
};

$(() => {
  registerPaths();
});

// Same as above but longer
// $("a[href='#about']").on('click', (event) => {
//   $('#about').toggleClass('hidden');
// });
//
// $("a[href='#others']").on('click', (event) => {
//   $('#others').toggleClass('hidden');
// });
//
// $("a[href='#puppy']").on('click', (event) => {
//   $('#puppy').toggleClass('hidden');
// });


module.exports = true;
