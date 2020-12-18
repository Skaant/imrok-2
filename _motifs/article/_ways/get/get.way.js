import INSTANCE from "../../../../motifs-js/_motifs/instance/instance.motif.js";
import ARTICLE from '../../article.motif.js'
import formatEnum from "../../../../motifs-js/_motifs/get/_enums/format/format.enum.js";

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