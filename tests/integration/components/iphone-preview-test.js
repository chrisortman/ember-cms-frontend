import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('iphone-preview', 'Integration | Component | iphone preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{iphone-preview}}`);
  //
  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#iphone-preview}} {{/iphone-preview}}
  `);

  assert.equal(this.$().text().trim(), 'Overview of the study\n\n  Learn more about the study\n\n  Get Started');
});
