const fs = require('fs')
const util = require('util')

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile)
  }

  async read(path) {
    try {
      return await this.reader(path, 'utf8')
    } catch (e) {
      console.log(e)
      return undefined
    }
  }
}

module.exports = Reader
