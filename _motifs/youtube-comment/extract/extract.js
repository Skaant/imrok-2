import FILE from '../../../motifs-js/_motifs/file/file.motif.js'
import formatEnum from '../../../motifs-js/_motifs/get/_enums/format/format.enum.js'
import commentRFormatterUtil from './_utils/commentRFormatter/commentRFormatter.util.js'

/**
 * @param {string} id The YOUTUBE_VIDEO id
 */
export default id => new Promise(resolve => {

  FILE.get(
    '/_data/youtube-videos/' + id
      + '/' + id + '.comments.js',
    { format: formatEnum.ESM }
  )
    .then(response => {
      
      const contents = (response.contents.itemSectionRenderer.contents || [])
      /** @todo Observe behaviour on more than 1 comment */
      contents.pop()
      resolve(contents
        .map(content => {
          
          const commentR = content.commentThreadRenderer.comment.commentRenderer
          const replies = content.commentThreadRenderer.replies.commentRepliesRenderer.contents

          return {
            ...commentRFormatterUtil(commentR),
            ...(replies
              ? { replies : replies.map(reply =>
                  commentRFormatterUtil(reply.commentRenderer)) }
              : {})
          }
        }))
      })
})