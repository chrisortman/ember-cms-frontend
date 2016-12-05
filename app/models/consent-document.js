import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  version: DS.attr(),
  lastPublished: DS.attr(),
  sections: DS.hasMany('consent-section')
});
