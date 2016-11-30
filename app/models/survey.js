import DS from 'ember-data';

export default DS.Model.extend({
  title       : DS.attr('string'),
  questions   : DS.hasMany('survey-question'),
  rev         : DS.attr('string'),
});
