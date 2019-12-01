# Explain the CSS Box Model

The term box model is way of referencing the space that an element takes up on a page. It consists of margin (the space between the element and other elements), border, padding (the space between the content and border) and the content. Each of these "space"s is considered a "box", altogether composing the full "CSS Box Model".

You can visualize this in the Chrome Debugger in the elements tab. When inspecting an element it will highlight each "box" in the Box Model. Additionally, when selecting an element at (roughly) the bottom right will be a visualization of the Box Model which you can modify by double clicking inside the box. Alternatively, you can apply CSS directly in the Chrome debugger to manipulate the Box Model for element(s).

## Bonus

Create a page with a blue div with each of the four Box Model properties set to specific values

See [drill-solution.html](drill-solution.html)

# Explain each part of the below code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <script type="text/javascript" src="app.js></script>
</body>
</html>
```

  * `DOCTYPE`: instructions to the browser about what version of HTML is being used.

  * `head`: a container for elements about that give information about the website like the title, scripts, styles, and meta information. 

  * `meta`: data about the data on the page (think of things like language or keywords)

    * `UTF-8`: The character encoding - how data should be read

  * `title`: the title of the page (appears in tab)

  * `link`: links to stylesheets

  * `body`: where the actual content that appears on the page goes

  * `script`: Embedded JavaScript code

# Which line of code is needed to make a page responsive?

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```