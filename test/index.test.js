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

  it('transforms multiple horizontal words', () => {
    const output = bravoVince('bravo', ['avocado', 'orange', 'rooibos'])
    const expected = heredoc`
      B
      R O O I B O S
      A V O C A D O
      V
      O R A N G E
    `
    expect(output).to.eql(expected)
  })

  it('transforms without any horizontal words', () => {
    const output = bravoVince('bravo', [])
    const expected = heredoc`
      B
      R
      A
      V
      O
    `
    expect(output).to.eql(expected)
  })

  it('places a word only once', () => {
    const output = bravoVince('tdd', ['django'])
    const expected = heredoc`
      T
      D J A N G O
      D
    `
    expect(output).to.eql(expected)
  })

  it('transforms text without being case sensitive', () => {
    const output = bravoVince('BRAVO', ['vince'])
    const expected = heredoc`
      B
      R
      A
      V I N C E
      O
    `
    expect(output).to.eql(expected)
  })

  it('transforms words in order', () => {
    const output = bravoVince('pollos', ['lydia', 'louis'])
    const expected = heredoc`
      P
      O
      L Y D I A
      L O U I S
      O
      S
    `
    expect(output).to.eql(expected)
  })

  context('when called incorrectly', () => {
    it('throws an error for missing vert', () => {
      expect(() => bravoVince(null, ['vince'])).to.throw(/vert must be a string/)
    })

    it('throws an error for missing horiz', () => {
      expect(() => bravoVince('bravo')).to.throw(/horiz must be an array of strings/)
      expect(() => bravoVince('bravo', null)).to.throw(/horiz must be an array of strings/)
    })

    it('throws an error for non-array horiz', () => {
      expect(() => bravoVince('bravo', 'vince')).to.throw(/horiz must be an array of strings/)
    })
  })
})
