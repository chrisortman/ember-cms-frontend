import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store
      .findRecord(
        'survey',
        params.survey_id 
      );
  },

  actions: {

    addQuestion(survey) {
      return survey.get('questions').then( (questions) => {

        let questionCount = questions.length;
        let question = this.store.createRecord('survey-question', {
          survey: survey,
          identifier: `Question_${questionCount+1}`
        });
        questions.pushObject(question);
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
