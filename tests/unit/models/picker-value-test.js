import { moduleForModel, test } from 'ember-qunit';

moduleForModel('picker-value', 'Unit | Model | picker value', {
  // Specify the other units that are required for this test.
  needs: ['model:survey-question']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
