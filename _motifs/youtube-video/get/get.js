import formatEnum from "../../../motifs-js/_motifs/get/_enums/format/format.enum.js";
import INSTANCE from "../../../motifs-js/_motifs/instance/instance.motif.js";
import YOUTUBE_COMMENT from "../../youtube-comment/youtube-comment.motif.js";
import YOUTUBE_VIDEO from "../youtube-video.motif.js";

export default () => new Promise(resolve =>
  INSTANCE.get(
    YOUTUBE_VIDEO,
    { format: formatEnum.TRANSFORM }
  )
    .then(videos =>
      Promise.all(videos.map(video =>
        YOUTUBE_COMMENT.extract(video.path)))
        
        .then(comments => resolve(videos.map((video, index) =>
          ({
            ...video,
            comments: comments[index]
          })))))
)