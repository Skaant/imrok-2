import motifJs from 'motifs-js'

const MOTIF = motifJs(import.meta.url, { log: true })

MOTIF.cli(process.argv.slice(3), { log: true })