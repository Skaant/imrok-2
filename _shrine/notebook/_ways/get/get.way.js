import FILE from "../../../../kami.js/_shrine/file/file.kami.js";
import NOTEBOOK from '../../notebook.kami.js'
import formatEnum from "../../../../kami.js/_shrine/file/_ways/get/_enums/format/format.enum.js";

export default options =>

  new Promise(resolve =>
    
    FILE.get(
      NOTEBOOK,
      {
        format: formatEnum.ESM,
        ...options
      })
      .then(drafts => resolve(drafts)))