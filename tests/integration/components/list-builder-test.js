import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { assertionInjector, assertionCleanup } from '../../assertions';

moduleForComponent('list-builder', 'Integration | Component | list builder', {
  integration: true,

  beforeEach() {
    assertionInjector(this);
  },

  afterEach() {
    assertionCleanup();
  }
});

test('render with empty list displays add new button', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('objects', []);
  this.render(hbs`{{list-builder items=objects}}`);

  assert.equal(this.$('button:contains("Add some items")').length, 1);

});

test('renders with existing items', function(assert) {
  this.set('objects', ['Cat']);
  this.render(hbs`{{list-builder items=objects}}`);

  let addItemsButton = this.$('button:contains("Add some items")');
  // assert.equal(this.$('li input[value="Cat"]').length, 1);

  assert.hasSelector('li input',1);
  assert.equal(addItemsButton.length, 1);

  addItemsButton.click();

  assert.hasSelector('li input', 2);

  this.$('a:contains("remove")').first().click();

  assert.hasSelector('li input', 1);
});
