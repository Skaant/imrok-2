import ARTICLE from "../../../../_motifs/article/article.motif.js";
import STORYBOARD from "../../../../_motifs/storyboard/storyboard.motif.js";
import NOTEBOOK from "../../../../_motifs/notebook/notebook.motif.js";

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