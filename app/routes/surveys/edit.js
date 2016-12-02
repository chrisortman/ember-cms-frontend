import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  model(params) {
    return this.store
      .findRecord(
        'survey',
        params.survey_id 
      );
  },

  actions: {

    saveSurvey() {
      const survey = this.modelFor('surveys.edit');
      let questionSaves = survey.get('questions').map((q) => {
        return q.save();
      });
      return RSVP.all(questionSaves).then(() => {
        return survey.save();
      }).then(() => {
        this.transitionTo('surveys');
      });
    },

    addQuestion(survey) {

      return survey.get('questions').then( (questions) => {

        let questionCount = questions.length;

        let question = this.store.createRecord('survey-question', {
          survey: survey,
          identifier: `Question_${questionCount+1}`
        });

        questions.pushObject(question);
        return question.save();
      });
    },

    addPickerItem(question) {
      return question.get('pickerValues').then( (pv) => {
        console.log("PV", pv);
        let newChoice = this.store.createRecord('picker-value',{
          question: question,
          value: '11',
          text: 'FOOO',
        });
        pv.pushObject(newChoice);
      });
    },
  }
});
