import INSTANCE from "../../../../kami.js/_shrine/instance/instance.kami.js";
import ARTICLE from '../../article.kami.js'
import formatEnum from "../../../../kami.js/_shrine/get/_enums/format/format.enum.js";

/** Order the results by decreasing
 *  post date. */
export default options =>

  new Promise(resolve =>
    
    INSTANCE.get(
      ARTICLE,
      {
        format: formatEnum.ESM,
        ...options
      })
      .then(articles =>
        
        resolve(articles
          .sort((a, b) =>
          
            parseInt(a.id) - parseInt(b.id)))))