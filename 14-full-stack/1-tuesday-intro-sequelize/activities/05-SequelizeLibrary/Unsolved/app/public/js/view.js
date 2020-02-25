'use strict';

// When user hits the search-btn
$(`#search-btn`).on(`click`, event => {
  event.preventDefault();

  // Save the book they typed into the book-search input
  const bookSearched = $(`#book-search`)
    .val()
    .trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get(`/api/${ bookSearched}`, data => {
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
  });
});

// When user hits the author-search-btn
$(`#author-search-btn`).on(`click`, () => {
  // Save the author they typed into the author-search input
  const authorSearched = $(`#author-search`)
    .val()
    .trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get(`/api/author/${ authorSearched}`, data => {
    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
  });
});

// When user hits the genre-search-btn
$(`#genre-search-btn`).on(`click`, () => {
  // Save the book they typed into the genre-search input
  const genreSearched = $(`#genre-search`)
    .val()
    .trim();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get(`/api/genre/${ genreSearched}`, data => {
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
  });
});

function renderBooks(data) {
  if (data.length !== 0) {
    $(`#stats`).empty();
    $(`#stats`).show();

    for (let i = 0; i < data.length; ++i) {
      const div = $(`<div>`);

      div.append(`<h2>${ data[i].title }</h2>`);
      div.append(`<p>Author: ${ data[i].author }</p>`);
      div.append(`<p>Genre: ${ data[i].genre }</p>`);
      div.append(`<p>Pages: ${ data[i].pages }</p>`);
      div.append(
        `<button class='delete' data-id='${
          data[i].id
        }'>DELETE BOOK</button>`
      );

      $(`#stats`).append(div);
    }

    $(`.delete`).click(function() {
      $.ajax({
        method: `DELETE`,
        url: `/api/book/${ $(this).attr(`data-id`)}`
      })
        // On success, run the following code
        .then(() => {
          console.log(`Deleted Successfully!`);
        });

      $(this)
        .closest(`div`)
        .remove();
    });
  }
}
