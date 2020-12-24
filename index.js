import motifJs from './motifs-js/index.js'
import YOUTUBE_COMMENT from './_motifs/youtube-comment/youtube-comment.motif.js'

const MOTIF = motifJs(import.meta.url, { log: true })

YOUTUBE_COMMENT.extract('comment-faire-des-choses-1_old')
  .then(result => console.log(result))

// MOTIF.cli(process.argv.slice(3), { log: true })