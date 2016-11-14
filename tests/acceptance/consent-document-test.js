import {  test } from 'qunit';  
import moduleForAcceptance from 'cms/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | consent document', {
  beforeEach() {
    console.log("Before EaCH");
      window.server.loadFixtures();
      // startMirage();
  }
});

test('visiting /consent-document', function(assert) {
  visit('/consent-document');

  andThen(function() {
    assert.equal(currentURL(), '/consent-document');
  });
});
