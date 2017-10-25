# Typeit.js
A simple, pure JavaScript script to type out sentences in the browser. To see a
live example, see www.JacobusErasmus.com. If you are looking for something more
advanced (and perhaps overly complicated), see Matt Boldt's Typed.js
(https://github.com/mattboldt/typed.js).

# Usage
Using Typeit.js requires only two steps.

## Step 1

First, download the typeit.js file
(https://raw.githubusercontent.com/KobusErasmus/typeit.js/master/typeit.js) and
include it at the bottom of your HTML body tag. For example:
```
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script src="typeit.js"></script>
  </body>
</html>
```

## Step 2
Then, second, give any elements that should be typed out the class "typeit".
For example:
```
<!DOCTYPE html>
<html>
  <head>
    <title>Typeit.js Test</title>
  </head>
  <body>
    <h1 class="typeit">This will be typed out</h1>
    <script src="typeit.js"></script>
  </body>
</html>
```

# Running Tests
To run the tests for Typeit.js, simply open the file test/test.html in a web
browser.

# About Author
See www.JacobusErasmus.com
