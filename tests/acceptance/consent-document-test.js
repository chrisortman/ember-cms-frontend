import {  test } from 'qunit';  
import moduleForAcceptance from 'cms/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | consent document', {
  beforeEach() {
    window.server.loadFixtures();
    console.log("Before EaCH");
      // startMirage();
  }
});

test('visiting /consent-document', function(assert) {
  visit('/');
  // return pauseTest();

  visit('/consent-document');


  click('#section_item_1');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 2 of 2 -");
  });
});

test('adding a new section', function(assert) {

  visit('/consent-document');

  click('#new_section');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 3 of 3 -");
  });
});
