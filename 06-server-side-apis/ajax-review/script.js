'use strict'

$(document).ready(function() {
  /**
   * we are making two api calls.
   * One for the array chuck norris gifs (chuckGifs function)
   * and one a fact for each gif (chuckFact function)
   * Since chuckFact gets called for each gif the api may take
   * a while to finish
   * The code below will hide the loading gif and show the main
   * content once the 5th ajaxs call has been completed
   */
  var ajaxCount = 0;

  $(document).ajaxComplete(function() {
    ++ajaxCount;
    if (ajaxCount === 5) {
      $('#loading').hide();
      $('main').removeClass('d-none');
      $('main').addClass('d-flex');
    }
  });

  /**
   * categories for select elements options
   */
  var categories = [
    'dev',
    'movie',
    'food',
    'celebrity',
    'science',
    'political',
    'sport',
    'religion',
    'animal',
    'music',
    'history',
    'travel',
    'career',
    'money',
    'fashion'
  ];

  // grab the hidden controls for the slide
  var controls = $($('#controls').html());

  var currentDate = moment().format('dddd MMM. Do, YYYY');
  $('#current-date').text(currentDate);

  chuckGifs();

  function chuckGifs() {
    // 06-server-side-apis/1-saturday-apis-and-ajax/activities/02-6-Ajax_OMDB
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=chuck%norris';
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      var results = response.data;
      var category = $('#current-category')
        .text()
        .toLowerCase();

      $('.carousel-inner').empty();
      // 03-week-javascript/2-tuesday-day-loops-and-more/activities/17-MyFirstLoop
      for (var i = 0; i < results.length; i++) {
        var gifUrl = results[i].images.downsized.url;
        var stillUrl = results[i].images.downsized_still.url;

        var carouselItemEl = createCarouselItem(i);
        // 05-third-party-apis/1-saturday-third-party-apis/activities/04-jQueryDrinkList
        var img = $('<img>');
        img.attr({
          src: gifUrl,
          class: 'd-block w-100',
          alt: 'gif',
          'data-still': stillUrl,
          'data-animate': gifUrl,
          'data-state': 'animate'
        });

        carouselItemEl.append(img);

        chuckFact(carouselItemEl, category);

        $('.carousel-inner').append(carouselItemEl);
      }

      $('.carousel-inner').append(controls);
    });
  }

  function createCarouselItem(index) {
    var carouselItemEl =
      index === 0
        ? $("<div class='carousel-item active' >")
        : $('<div class=carousel-item >');
    return carouselItemEl;
  }

  function chuckFact(element, category) {
    var queryURL =
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories';
    var settings = {
      async: true,
      crossDomain: true,
      url:
        'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=' +
        category,
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': '26fcba3080msh3a2259b034b4c3dp1f9e01jsn7b1d1f231b17',
        accept: 'application/json'
      }
    };
    $.ajax(settings).then(function(response) {
      var captionEl = $('<div></div>');
      var buttonEl = $('<button></button>');
      buttonEl
        .addClass('btn')
        .attr('type', 'button')
        .text('Still');

      appendFists(buttonEl);
      buttonEl.click(gifAnimateControl);
      captionEl.addClass('carousel-caption d-none d-md-block');
      var text = response.value;
      var textEl = $(`<h2>${text}</h2>`);
      captionEl.append([buttonEl, textEl]);
      element.append(captionEl);
    });
  }

  function gifAnimateControl() {
    var imgEl = $(this)
      .parent()
      .parent()
      .children('img');
    var state = imgEl.attr('data-state');

    if (state === 'still') {
      imgEl.attr({
        src: imgEl.attr('data-animate'),
        'data-state': 'animate'
      });

      appendFists($(this).text('Still'));
    } else if (state === 'animate') {
      imgEl.attr({
        src: imgEl.attr('data-still'),
        'data-state': 'still'
      });
      appendFists($(this).text('Animate'));
    }
  }

  function appendFists(element) {
    element.append('<p>👊🏻👊🏼👊🏽👊🏾👊🏿</p>');
  }

  var selectEl = $('select#categories');
  $.each(categories, function(i, category) {
    var optionEl = $(`<option value=${category}>${category}</option>`);
    selectEl.append(optionEl);
  });

  selectEl.change(function() {
    var selectedCategory = $(this)
      .children('option:selected')
      .val();

    $('#current-category').text(selectedCategory);
    chuckGifs();
  });
});
