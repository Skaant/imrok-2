import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'

export default {
  id: 'storyboard',
  names: namesProp,
  description: descriptionProp,
  regExp: /_data\/storyboards\/(.*)\/(.*).storyboard.js/,
  get: getWay
}