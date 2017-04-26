const bravoVince = require('../src/index.js')
const heredoc = require('heredocument')({ newlineAtEnd: false })
const expect = require('chai').expect

describe('bravoVince', () => {
  it('transforms text', () => {
    const output = bravoVince('bravo', ['vince'])
    const expected = heredoc`
      B
      R
      A
      V I N C E
      O
    `
    expect(output).to.eql(expected)
  })
})
