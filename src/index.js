const typeCheck = require('type-check').typeCheck

function bravoVince (vert, horiz) {
  if (!typeCheck('String', vert)) throw new Error('vert must be a string')
  if (!typeCheck('[String]', horiz)) throw new Error('horiz must be an array of strings')
  vert = vert.toUpperCase().split('')
  horiz.forEach(h => {
    h = h.toUpperCase()
    let found = false
    vert.forEach((v, i) => {
      if (found) return
      if (v.length > 1) return
      if (v !== h[0]) return
      vert[i] = h.split('').join(' ')
      found = true
    })
  })
  return vert.join('\n')
}

module.exports = bravoVince
