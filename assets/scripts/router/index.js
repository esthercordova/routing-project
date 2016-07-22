'use strict';

const Router5 = require('router5').default;

const routes = [
  { name: 'about', path: '/about'},
  { name: 'others', path: '/others'},
  { name: 'puppy', path: '/puppy'},
];

const options = {
  useHash: true, // important
  hashPrefix: '!',
  defaultRoute: '/',
};

const router = new Router5(routes, options);

module.exports = router;

// const paths = [
//   '#about',
//   '#others',
//   '#puppy'
// ];
//
// const hideAllContent = () => {
//   paths.forEach((path) => {
//     $(`${path}`).addClass('hidden');
//   });
// };
//
// const showContent = (path) => {
//   $(`${path}`).removeClass('hidden');
// };
//
// const registerPaths = () => {
//   paths.forEach((path) => {
//     $(`a[href="${path}"]`).on('click', (event) => {
//       event.preventDefault();
//
//       hideAllContent();
//       showContent(path);
//     });
// });
// };
//
// $(() => {
//   registerPaths();
// });
