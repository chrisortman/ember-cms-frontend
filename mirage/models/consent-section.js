import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  document: belongsTo('consent-document')
});
