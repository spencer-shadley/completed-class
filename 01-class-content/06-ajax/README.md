# Unit 6: Introduction to APIs and Ajax

## Overview
In this unit we will use the jQuery AJAX method to make requests to server-side APIs. Up to this point, the work we’ve done is entirely client-side, that is, our programs are limited to code that is executed, and data that is generated, within the browser. When we manipulate the DOM, using either vanilla JavaScript or jQuery, we are leveraging the DOM API. An API, or Application Programming Interface, is a set of protocols that allow us to hook into the functionality of another application and use it within our own. The DOM API is an example of a _client_-side API. There are numerous client-side web APIs available to us for extending the functionality of the browser. One such API is XMLHttpRequest. This API allows us to communicate with _server_-side APIs. Companies and organizations that collect and store data often make that data available to web developers to use in their applications. A server-side API is one or more URLs, or endpoints, where we can make requests for data stored on a third-party server.

When we make a request to a server-side API, we have no control over how long the response will take to resolve. This can create issues for us when dynamically generating HTML in the DOM as our JavaScript may execute before we’ve received the data we need to render elements. The acronym AJAX is short for “asynchronous JavaScript and XML”. AJAX is the integration of several technologies to address the asynchronicity of the client-server request-response pattern. XML, short for “extensible markup language”, is a specification for encoding documents similar to HTML. It was the standard format for data exchange for many years, but has been largely replaced by JSON, though we still refer to this approach as AJAX. The fetch API was recently introduced to simplify use of the XMLHttpRequest object without the need for a third-party library, such as jQuery.

## Key Topics
* JSON
* Ajax
* HTTP GET requests
* Server-side APIs

## Comprehension Check
You will be employer-ready if you can answer the following questions:
1. What is JSON?
2. How does the client-server relationship work?
3. What is an API?

## Learning Objectives
You will be employer-competitive if you are able to:
* Explain the difference between a client-side and server-side API
* Explain the client-server model and request-response pattern
* Explain and implement HTTP GET requests and handle responses using AJAX
* Parse JSON to dynamically generate HTML
* Explain the benefits and challenges of working with asynchronous JavaScript
* Explain and execute callbacks to handle asynchronous HTTP requests

## Homework: Giphy Viewer
* In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

## Helpful Links
* [Wikipedia: Web API](https://en.wikipedia.org/wiki/Web_API)
* [Wikipedia: AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [jQuery](https://api.jquery.com/)
* [Mozilla AJAX Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
