import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('survey');
  },

  actions : {

    newSurvey() {
      let newSurvey = this.store.createRecord('survey', {
        title: 'New Survey'
      });

      newSurvey.save().then( (newSurvey) => {
        this.transitionTo('surveys.edit', newSurvey );
      });
      
      // this.transitionTo('surveys.edit', newSurvey.save() );
    }
  }
});
