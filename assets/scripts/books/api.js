'use strict';

const index = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: null,
      method: null,
      data: null,
      headers: null,

      success: (data) => {
        resolve(data);
      },

      error: (error) => {
        reject(error);
      },
    });
  });
};

const middleWare = () => {
  return (toState, fromState, done) => {
    // use toState to check if the routing segment matches
    // /books or /books/:id

    // then fire the appropriate Promisified AJAX call and return it
    // then call done in a .then(done);

  };
};
