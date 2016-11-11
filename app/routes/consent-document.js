import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findRecord('consent-document', 2, {include: 'sections'}).then(function(r) {
      console.log(r);
      return r;
    });
  },

  setupController(controller, model) {
    controller.set('model',model);
    controller.set('currentSection', model.get('sections.firstObject'));
  }
});
