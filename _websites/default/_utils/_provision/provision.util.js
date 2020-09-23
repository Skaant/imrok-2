import ARTICLE from "../../../../_shrine/article/article.kami.js";
import STORYBOARD from "../../../../_shrine/storyboard/storyboard.kami.js";

export default () =>

  new Promise(resolve =>
    
    Promise.all([
      ARTICLE.get(),
      STORYBOARD.get()
    ])
    .then(([ articles, storyboards ]) =>
    
      resolve({
        articles,
        storyboards
      })))