# canvas-arrow-path

[![NPM Version][npm-image]](https://npmjs.org/package/canvas-arrow-path)

Draw arrows along a path in a html canvas.


## Installation

    npm install canvas-arrow-path


## Example

```javascript
var arrow = require('canvas-arrow-path')
  , canvas = document.getElementById('my-canvas')
  , ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.translate(200, 200)

ctx.lineWidth = 2
ctx.strokeStyle = 'red'

arrow(ctx, [ [0, 0]
           , [200, 0]
           , [250, 100]
           , [250, 200]
           ])
```

[npm-image]: https://img.shields.io/npm/v/canvas-arrow-path.svg?style=flat
