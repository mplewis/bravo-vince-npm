function bravoVince (vert, horiz) {
  vert = vert.split('')
  horiz.forEach(h => {
    let found = false
    vert.forEach((v, i) => {
      if (found) return
      if (v.length > 1) return
      if (v !== h[0]) return
      vert[i] = h.split('').join(' ')
      found = true
    })
  })
  return vert.join('\n').toUpperCase()
}

module.exports = bravoVince
