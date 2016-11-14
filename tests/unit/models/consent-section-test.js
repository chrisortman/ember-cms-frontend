import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-section', 'Unit | Model | consent section', {
  // Specify the other units that are required for this test.
  needs: ['model:consent-document']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
