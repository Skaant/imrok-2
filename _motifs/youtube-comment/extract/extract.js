import formatEnum from '../../../motifs-js/_motifs/get/_enums/format/format.enum.js'
import instanceMotif from '../../../motifs-js/_motifs/instance/instance.motif.js'
import youtubeCommentMotif from '../youtube-comment.motif.js'
import { EXTRACT_ERROR_NO_SCOPE } from './extract.errors.js'
import commentRFormatterUtil from './_utils/commentRFormatter/commentRFormatter.util.js'

/**
 * @param {string} scope The video folder path
 */
export default scope => {
  
  if (!scope) throw new Error(EXTRACT_ERROR_NO_SCOPE)

  return new Promise(resolve => {

    instanceMotif.get(
      youtubeCommentMotif,
      {
        format: formatEnum.ESM,
        scope
      })
      .then(responses => resolve(responses.map(response => {
        
        const contents = (response.contents.itemSectionRenderer.contents || [])
        /** @todo Observe behaviour on more than 1 comment */
        contents.pop()
        return contents
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
          })
        })))
  })
}