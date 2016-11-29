import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store')
      .findRecord( 'consent-document', params.document_id, { 
        include: 'sections'
      }).then(function(r) {
        console.log(r);
        return r;
      });
  },

  setupController(controller, model) {
    controller.set('model',model);
    controller.set('currentSection', model.get('sections.firstObject'));
  }
});
