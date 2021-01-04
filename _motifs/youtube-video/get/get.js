import fileMotif from "motifs-js/_motifs/file/file.motif.js";
import formatEnum from "motifs-js/_motifs/get/_enums/format/format.enum.js";
import INSTANCE from "motifs-js/_motifs/instance/instance.motif.js";
import YOUTUBE_COMMENT from "../../youtube-comment/youtube-comment.motif.js";
import YOUTUBE_VIDEO from "../youtube-video.motif.js";

export default () => new Promise(resolve =>
  INSTANCE.get(
    YOUTUBE_VIDEO,
    { format: formatEnum.TRANSFORM }
  )
    .then(videoIs =>
      Promise.all(videoIs.map(videoI =>
        Promise.all([
          fileMotif.get(
            videoI.path + '/' + videoI.id + '.video.js',
            { format: formatEnum.ESM }
          ),
          YOUTUBE_COMMENT.extract(videoI.path)
        ])
        
        .then(([ video, comments ]) => resolve(videoIs.map((videoI, index) =>
          ({
            ...video,
            ...videoI,
            comments: comments[index]
          })))))))
)