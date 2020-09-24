import NOTEBOOK from '../../notebook.kami.js'
import BOOK from "../../../../kami.js/_shrine/book/book.kami.js";

export default options =>

  new Promise(resolve =>
    
    BOOK.get(NOTEBOOK, false, options)

      .then(notebooks => resolve(notebooks)))