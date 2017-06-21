class PatternList {
  render (node) {
  }
}

const converter = new PatternList()

module.exports = (leitmotiv) => {
  leitmotiv.converters['pattern-list'] = (node) => converter.render(node)
}
