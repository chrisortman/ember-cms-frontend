import DS from 'ember-data';

export default DS.Model.extend({
  value       : DS.attr('string'),
  text        : DS.attr('string'),
  order       : DS.attr('number'),
  question    : DS.belongsTo('survey-question'),
  rev         : DS.attr('string'),
});
