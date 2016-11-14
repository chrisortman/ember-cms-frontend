import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-document', 'Unit | Model | consent document', {
  // Specify the other units that are required for this test.
  needs: ['model:consent-section']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
