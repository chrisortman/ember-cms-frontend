import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  pickerValues: hasMany('picker-value'),
  survey: belongsTo('survey')
});
