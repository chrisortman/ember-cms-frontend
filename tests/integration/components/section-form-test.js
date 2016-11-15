import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('section-form', 'Integration | Component | section form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let stubSection = Ember.Object.create({
    title: 'Overview',
    summary: 'Overview of the study',
    researchKitType: 'Purpose',
    learnMoreButtonTitle: 'Learn more about the study'
  });
  this.set('currentSection', stubSection);

  this.render(hbs`{{section-form section=currentSection}}`);

  assert.equal(this.$('input.ork-title').val(), "Overview");
  assert.equal(this.$('input.ork-summary').val(), "Overview of the study");

  let _that = this;
  let choices = this.$('select.ork-type option').map(function() {
    return _that.$(this).text(); 
  }).get();

  assert.deepEqual( choices, ["Overview", "Purpose"] );

  assert.equal( this.$('select.ork-type').val(), 'Purpose' );

  assert.equal( this.$('input.ork-learn-more').val(), 'Learn more about the study');
});

