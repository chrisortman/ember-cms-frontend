import Ember from 'ember';

export default Ember.Component.extend({
  showChoiceInput: Ember.computed.equal('answerType','Picker'),
  showMultiline: Ember.computed.equal('answerType', 'Text'),

});
