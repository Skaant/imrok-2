import ARTICLE from "motifs-js/_motifs/article/article.motif.js";
import STORYBOARD from "../../../../_motifs/storyboard/storyboard.motif.js";
import NOTEBOOK from "../../../../_motifs/notebook/notebook.motif.js";
import YOUTUBE_VIDEO from "../../../../_motifs/youtube-video/youtube-video.motif.js";

export default () =>

  new Promise(resolve =>
    
    Promise.all([
      ARTICLE.get(),
      STORYBOARD.get(),
      NOTEBOOK.get(),
      YOUTUBE_VIDEO.get()
    ])
    .then(([
      articles,
      storyboards,
      notebooks,
      videos
    ]) =>
    
      resolve({
        articles,
        storyboards,
        notebooks,
        videos
      })))