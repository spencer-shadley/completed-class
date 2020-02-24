'use strict';

/* global moment */

// When the page loads, grab and display all of our chirps
$.get(`/api/all`, data => {
  if (data.length !== 0) {
    for (let i = 0; i < data.length; ++i) {
      const row = $(`<div>`);
      row.addClass(`chirp`);

      row.append(`<p>${data[i].author} chirped.. </p>`);
      row.append(`<p>${data[i].body}</p>`);
      row.append(
        `<p>At ${moment(data[i].created_at).format(`h:mma on dddd`)}</p>`
      );

      $(`#chirp-area`).prepend(row);
    }
  }
});

// When user chirps (clicks addBtn)
$(`#chirp-submit`).on(`click`, event => {
  event.preventDefault();

  // Make a newChirp object
  const newChirp = {
    author: $(`#author`)
      .val()
      .trim(),
    body: $(`#chirp-box`)
      .val()
      .trim(),
    // eslint-disable-next-line camelcase
    created_at: moment().format(`YYYY-MM-DD HH:mm:ss`)
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post(`/api/new`, newChirp)
    // On success, run the following code
    .then(() => {
      const row = $(`<div>`);
      row.addClass(`chirp`);

      row.append(`<p>${newChirp.author} chirped: </p>`);
      row.append(`<p>${newChirp.body}</p>`);
      row.append(
        `<p>At ${moment(newChirp.created_at).format(`h:mma on dddd`)}</p>`
      );

      $(`#chirp-area`).prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $(`#author`).val(``);
  $(`#chirp-box`).val(``);
});
