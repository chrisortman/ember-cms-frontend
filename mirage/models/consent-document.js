import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  sections: hasMany('consent-section')
});
