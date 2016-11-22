import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  question: belongsTo('survey-question'),
});
