import Ember from 'ember';

export default Ember.Component.extend({

  allAnswerTypes: {
    "Shortcuts": [
      "Yes / No"
    ],
    "Research Kit": [
      "Text",
      "Number",
      "Choice",
      "Picker",
      "Vertical Scale",
      "Horizontal Scale"
    ]
  },

  showChoiceInput: Ember.computed.equal('question.answerType','Picker'),
  showMultiline: Ember.computed.equal('question.answerType', 'Text'),

  actions: {
    changeAnswerType(selectedType) {
      this.set('question.answerType', selectedType);
    }
  }
});
