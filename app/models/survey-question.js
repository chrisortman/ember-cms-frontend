import DS from 'ember-data';

export default DS.Model.extend({
  identifier    : DS.attr('string'),
  title         : DS.attr('string'),
  answerType    : DS.attr('string'),
  required      : DS.attr('boolean'),
  multiline     : DS.attr('boolean'),
  survey        : DS.belongsTo('survey'),
  pickerValues  : DS.hasMany('picker-value'),
  rev           : DS.attr('string'),
});
