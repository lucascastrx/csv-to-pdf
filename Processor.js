class Processor {
  static process(data) {
    let content = data.split('\n')
    let rows = []
    content.forEach(e => {
      rows.push(e.split(','))
    })
    return rows
  }
}

module.exports = Processor
