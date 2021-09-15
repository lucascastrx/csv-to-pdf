const pdf = require('html-pdf')

class PdfWriter {
  static writePdf(filename, html) {
    pdf.create(html, {}).toFile(filename, e => {})
  }
}

module.exports = PdfWriter
