import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('consent-document');
  },

  actions: {
    newConsentDocument() {
      let newDoc = this.store.createRecord('consent-document', {
        title: 'My Doc'
      });

      return newDoc.save().then( (x) => {
        this.transitionTo('consent-document.edit', x );
      });
    }
  }
});
