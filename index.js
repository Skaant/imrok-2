import motifJs from './motifs-js/index.js'

const MOTIF = motifJs(import.meta.url, { log: true })

MOTIF.cli(process.argv.slice(3), { log: true })