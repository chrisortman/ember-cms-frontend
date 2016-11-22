import { moduleForModel, test } from 'ember-qunit';

moduleForModel('survey-question', 'Unit | Model | survey question', {
  // Specify the other units that are required for this test.
  needs: ['model:survey','model:picker-value']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
