import MOTIF from 'motifs-js/_motifs/motif/motif.motif.js'

export default () =>

  new Promise(resolve =>

    MOTIF.get()
      .then(motifs =>

        resolve({ motifs })))