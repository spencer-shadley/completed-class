# What is the syntax for an id, class, element, child and descendant selector?

* id: `#some-id`
* class: `.some-class`
* element: `some-element-tag-name`
* child: `element1 > element2` (selects all `element2`s which are direct children of an `element1`)
* descendant: `element1 element2` (selects all `element2`s which are descendants of an `element1`)

# What is needed to start using Bootstrap

## The Bootstrap stylesheet

The Bootstrap stylesheet needs to be included in the `head`

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

## The Bootstrap JavaScript

To enable interaction with Bootstrap components you need Bootstrap's JavaScript. This should be included at the end of your `body`.

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

# How do you add multiple classes to the same element?

Use a space delimeter in your HTML.

Example:
```html
<div class="class1 class2 class3"></div>
```

# How can you make content which is 6 columns when on a `sm` size device, 12 columns when on a `md` size device and 6 columns when on a `lg` device?

Use multiple classes, one for each size. Make sure your column is in a row and your row is in a grid (container).

```html
  <div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-12 col-lg-6">
            <!-- content -->
```
