import DS from 'ember-data';

export default DS.Model.extend({
  version: DS.attr(),
  lastPublished: DS.attr(),
  sections: DS.hasMany('consent-section')
});
