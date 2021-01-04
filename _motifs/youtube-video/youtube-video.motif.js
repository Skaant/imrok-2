import occurenceLevelEnum from 'motifs-js/_motifs/occurence/_enums/level/occurence.level.enum.js'
import get from './get/get.js'
import namesProp from './_props/names/names.prop.js'

export default {
  id: 'youtube-video',
  names: namesProp,
  occurences: [{
    level: occurenceLevelEnum.FOLDER,
    folderMatch: /\/_data\/youtube-videos\/([\w|\-]*)/,
    transform: ([ path, id ]) => ({ path, id })
  }],
  get
}