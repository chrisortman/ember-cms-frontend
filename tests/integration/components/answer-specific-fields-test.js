import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('answer-specific-fields', 'Integration | Component | answer specific fields', {
  integration: true
});

test('text answer type', function(assert) {
  this.render(hbs`{{answer-specific-fields answerType="Text"}}`);
  assert.equal(this.$('input.question-multiple-lines').length, 1);
});

test('picker answer type', function(assert) {

  this.render(hbs`{{answer-specific-fields answerType="Picker"}}`);
  assert.equal(this.$('ol.question-picker-input').length, 1);
});
