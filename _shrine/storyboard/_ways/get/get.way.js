import STORYBOARD from "../../storyboard.kami.js";
import BOOK from "../../../../kami.js/_shrine/book/book.kami.js";

export default options =>

  new Promise(resolve =>
    
    BOOK.get(STORYBOARD, false, options)

      .then(drafts => resolve(drafts)))