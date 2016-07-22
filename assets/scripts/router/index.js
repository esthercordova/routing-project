'use strict';

const Router5 = require('router5').default;
const loggerPlugin = require('router5').loggerPlugin();
const historyPlugin = require('router5-history').default();

const routes = [
  { name: 'index', path: '/'},
  { name: 'about', path: '/about'},
  { name: 'others', path: '/others'},
  { name: 'puppy', path: '/puppy'},
];

const options = {
  useHash: true, // important
  hashPrefix: '!',
  defaultRoute: '/',
};

const router = new Router5(routes, options)
  .usePlugin(loggerPlugin)
  .usePlugin(historyPlugin)

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
