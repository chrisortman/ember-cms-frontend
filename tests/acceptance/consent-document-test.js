import {  test } from 'qunit';  
import moduleForAcceptance from 'cms/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | consent document', {
  beforeEach() {
    window.server.loadFixtures();
  }
});

test('visiting /consent-document/2/edit', function(assert) {
  visit('/');
  // return pauseTest();

  visit('/consent-document/2/edit');


  click('#section_item_1');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 2 of 2 -");
  });
});

test('adding a new section', function(assert) {

  visit('/consent-document/2/edit');

  click('#new_section');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 3 of 3 -");
  });
});
