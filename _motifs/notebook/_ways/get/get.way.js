import NOTEBOOK from '../../notebook.motif.js'
import BOOK from "../../../../motifs-js/_motifs/book/book.motif.js";

export default options =>

  new Promise(resolve =>
    
    BOOK.get(NOTEBOOK, false, options)

      .then(notebooks => resolve(notebooks)))