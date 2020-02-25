'use strict';

/* global moment */

// When the page loads, grab and display all of our chirps
$.get(`/api/all`, chirps => {
  if (chirps.length === 0) {
    console.log(`no chirps found`);
    return;
  }
  for (const chirp of chirps) {
    $(`#chirp-area`).prepend(createChirpRow(chirp));
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
    .then(() => $(`#chirp-area`).prepend(createChirpRow(newChirp)));

  // Empty each input box by replacing the value with an empty string
  $(`#author`).val(``);
  $(`#chirp-box`).val(``);
});

function createChirpRow(chirpData) {
  const row = $(`<div>`);
  row.addClass(`chirp`);

  row.append(`<p>${chirpData.author} chirped.. </p>`);
  row.append(`<p>${chirpData.body}</p>`);
  row.append(
    `<p>At ${moment(chirpData.created_at).format(`h:mma on dddd`)}</p>`
  );
  return row;
}
