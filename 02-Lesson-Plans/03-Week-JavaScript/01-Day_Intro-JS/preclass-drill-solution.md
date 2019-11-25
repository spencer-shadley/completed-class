# 1. Explain each part of the below code

  * DOCTYPE: instructions to the browser about what version of HTML is being used.

  * head: a container for elements about that give information about the website like the title, scripts, styles, and meta information. 

  * meta: data about the data on the page (think of things like language or keywords)

    * viewport: Enables responsive layout by adjusting how the browser scales the page

    * UTF-8: The character encoding - how data should be read

  * title: the title of the page (appears in tab)

  * link: links to stylesheets

  * script: links to JavaScript files

  * body: where the actual content that
   appears on the page goes

# 2. What is needed to start using Bootstrap

## The Bootstrap stylesheet

The Bootstrap stylesheet needs to be included in the `head`

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

## The Bootstrap JavaScript

To enable interaction with Bootstrap components you need Bootstrap's JavaScript. This should be included at the end of your `body`.

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```
