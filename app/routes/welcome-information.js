import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('app-information',1).then(
      (record) => { return record },
      (reason) => {
        return this.store.createRecord('app-information', {
          id: 1,
          aboutText: 'Tell us about your app'
        });
      });
  },

  actions: {
    saveAll() {
      return this.modelFor('welcome-information').save();
    }
  }
});
