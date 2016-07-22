'use strict';

const router = require('./router/index');

//useMiddleware should only be used once
router.useMiddleware(require('./router/dom').transition);

const routerEvents = require('./router/events');

$(() => {
  router.start();

  routerEvents.addHandlers();
});
