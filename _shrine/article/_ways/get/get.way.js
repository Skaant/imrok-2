import FILE from "../../../../kami.js/_shrine/file/file.kami.js";
import ARTICLE from '../../article.kami.js'
import formatEnum from "../../../../kami.js/_shrine/file/_ways/get/_enums/format/format.enum.js";

export default options =>

  new Promise(resolve =>
    
    FILE.get(
      ARTICLE,
      {
        format: formatEnum.ESM,
        ...options
      })
      .then(articles => resolve(articles)))