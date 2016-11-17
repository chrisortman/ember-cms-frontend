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

  actions: {
    changeAnswerType(selectedType) {
      this.set('answerType', selectedType);
    }
  }
});
