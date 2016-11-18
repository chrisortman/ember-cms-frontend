import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store
      .findRecord(
        'survey',
        params.survey_id, {
          include: 'questions'
        }
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
    }
  }
});
