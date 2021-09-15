const Reader = require('./Reader')
const Writer = require('./Writer')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PdfWriter = require('./PdfWriter')

const leitor = new Reader()
const escritor = new Writer()

async function main() {
  const data = await leitor.read('./dataset.csv')

  let table = new Table(Processor.process(data))
  let html = await HtmlParser.parse(table)

  escritor.write(`${Date.now()}.html`, html)

  PdfWriter.writePdf(`${Date.now()}.PDF`, html)

  console.log(html)
}

main()
