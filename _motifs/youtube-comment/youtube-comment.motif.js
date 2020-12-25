import occurenceLevelEnum from '../../motifs-js/_motifs/occurence/_enums/level/occurence.level.enum.js'
import extract from './extract/extract.js'
import namesProp from './_props/names/names.prop.js'

export default {
  id: 'youtube-comment',
  names: namesProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /\/_data\/youtube-videos\/([\w|\-]*)\/([\w|\-]*).comments.js/,
    transform: ([ path, video, id ]) => ({ path, video, id })
  }],
  extract
}