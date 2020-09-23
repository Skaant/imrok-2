import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'notebook',
  names: namesProp,
  description: descriptionProp,
  regExp: /_data\/thoughts\/(.*)\/(.*).thought.js/,
}