import STORYBOARD from "../../storyboard.motif.js";
import BOOK from "motifs-js/_motifs/book/book.motif.js";

export default options =>

  new Promise(resolve =>
    
    BOOK.get(STORYBOARD, false, options)

      .then(storyboards => resolve(storyboards)))