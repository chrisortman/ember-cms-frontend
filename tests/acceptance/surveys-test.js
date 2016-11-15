import { test } from 'qunit';
import moduleForAcceptance from 'cms/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | surveys', {
  beforeEach() {
    window.server.loadFixtures();
  }
});

test('visiting /surveys', function(assert) {
  visit('/surveys');

  andThen(function() {
    assert.equal(currentURL(), '/surveys');
    assert.equal( find('ul.surveys li').length, 2);
  });

  click('ul.surveys li a:contains("General Health")');

  andThen(() => {
    assert.equal( find('input.survey-title').val(), "General Health");
  });
});


