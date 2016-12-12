import Ember from 'ember';

export default Ember.Service.extend({
  db: Ember.inject.service('local-pouch'),

});
