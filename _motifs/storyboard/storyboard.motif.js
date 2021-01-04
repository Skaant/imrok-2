import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import occurenceLevelEnum from 'motifs-js/_motifs/occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'storyboard',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /_data\/storyboards\/(.*)\/(.*).storyboard.js/,
    transform: ([ path, folder, id ]) => ({ path, folder, id })
  }],
  get: getWay
}