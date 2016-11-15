import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('iphone-preview', 'Integration | Component | iphone preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let stubSection = Ember.Object.create({
    title: 'Overview',
    summary: 'Overview of the study',
    learnMoreButtonTitle: 'Learn more about the study'
  });

  this.set('currentSection', stubSection);

  // Template block usage:
  this.render(hbs`
    {{#iphone-preview section=currentSection}} {{/iphone-preview}}
  `);

  assert.equal(this.$('.ork-title').text().trim(), "Overview");
  assert.equal(this.$('.ork-summary').text().trim(), "Overview of the study");
  assert.equal(this.$('.ork-learn-more').text().trim(), "Learn more about the study");
});
