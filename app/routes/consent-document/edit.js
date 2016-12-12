import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord( 'consent-document', params.document_id, { 
        include: 'sections'
      }).then(function(r) {
        console.log(r);
        return r;
      });
  },

  setupController(controller, model) {
    controller.set('model',model);
    controller.set('currentSection', model.get('sections.firstObject'));
  },

  actions: {

    addSection() {

      const model = this.controller.model;

      return model.get('sections').then( (sections) => {
        
        let section = this.store.createRecord('consent-section', {
          title: 'New Section',
          document: model,
        });

        sections.pushObject(section);
        this.controller.set('currentSection', section);
        return section.save().then( () => {
          this.controller.set('refresh', false);
          Ember.run.next( () => {
            this.controller.set('refresh', true);
          });
        });
      });
      // const _this = this;
      //
      // return section.save().then( () => {
      //   this.set('refresh', false);
      //   Ember.run.next(function () {
      //     _this.set('refresh', true);
      //   });
      // });
    },

    saveWholeDocument() {
      const model = this.controller.model;
      let sectionSaves = model.get('sections').map( (s) => {
        return s.save();
      });

      return RSVP.all(sectionSaves).then( () => {
        return model.save();
      }).then( () => {
        this.transitionTo('consent-document');
      });
    }
  }
});
