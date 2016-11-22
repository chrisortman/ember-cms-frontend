import DS from 'ember-data';

export default DS.Model.extend({
  identifier: DS.attr('string'),
  title: DS.attr('string'),
  answerType: DS.attr('string'),
  required: DS.attr('bool'),
  multiline: DS.attr('bool'),
  survey: DS.belongsTo('survey'),
  pickerValues: DS.hasMany('picker-value'),
});
