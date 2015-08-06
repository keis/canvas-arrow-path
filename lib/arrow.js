var length = require('gl-vec2/length')
  , normalize = require('gl-vec2/normalize')

module.exports = arrow

function arrow(ctx, path) {
  var node = path[0]
    , prev = node
    , pv = [1, 0]
    , step = 10
    , off
    , len
    , v
    , i

  ctx.save()
  ctx.translate(node[0], node[1])

  for (i = 1; i < path.length; i++) {
    node = path[i]
    v = [ node[0] - prev[0]
        , node[1] - prev[1] ]
    len = length(v)
    normalize(v, v)
    ctx.rotate(Math.atan2(pv[0], pv[1]) - Math.atan2(v[0], v[1]))

    for (off = step - 1; off < len; off += step) {
      ctx.beginPath()
      ctx.moveTo(off - 4, -4)
      ctx.lineTo(off, 0)
      ctx.lineTo(off - 4, 4)
      ctx.stroke()
    }

    ctx.translate(len, 0)
    prev = node
    pv = v
  }

  ctx.restore()
}
