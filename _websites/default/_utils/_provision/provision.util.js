import ARTICLE from "../../../../_shrine/article/article.kami.js";
import STORYBOARD from "../../../../_shrine/storyboard/storyboard.kami.js";
import NOTEBOOK from "../../../../_shrine/notebook/notebook.kami.js";

export default () =>

  new Promise(resolve =>
    
    Promise.all([
      ARTICLE.get(),
      STORYBOARD.get(),
      NOTEBOOK.get()
    ])
    .then(([
      articles,
      storyboards,
      notebooks
    ]) =>
    
      resolve({
        articles,
        storyboards,
        notebooks
      })))