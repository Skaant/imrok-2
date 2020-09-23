import KAMI from './kami.js/index.js'
import fileKami from './kami.js/_shrine/file/file.kami.js'
import formatEnum from './kami.js/_shrine/file/_ways/get/_enums/format/format.enum.js'
import { promises as fs } from 'fs'

KAMI.ave(
  import.meta.url,
  {
    log: true
  }
)

/* fileKami.get({
  id:'lol',
  regExp: /\/storyboards\/.*\/.*\/.*\.js/ }, {
    format: formatEnum.FILE_PATH,
    scope: '/_data/storyboards/psybok-vol1'})
  .then(files => files.forEach(file => {

    const split = file.split('/')
    
    fs.rename(
      global.PATH + file,
      global.PATH
        + '/_data/storyboards/psybok-vol1/'
        + split[4] + '/'
        + split[4] + '.page.js'
    )
  })) */

KAMI.cli(
  process.argv.slice(3),
  {
    log: true
  })