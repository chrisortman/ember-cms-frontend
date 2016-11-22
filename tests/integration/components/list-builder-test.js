import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { assertionInjector, assertionCleanup } from '../../assertions';
import { startMirage } from 'cms/initializers/ember-cli-mirage';

moduleForComponent('list-builder', 'Integration | Component | list builder', {
  integration: true,

  beforeEach() {
    this.server = startMirage();
    assertionInjector(this);
  },

  afterEach() {
    this.server.shutdown();
    assertionCleanup();
  }
});

test('render with empty list displays add new button', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('objects', []);
  this.set('addAction', () => {});
  this.render(hbs`{{list-builder items=objects addNewItem=addAction}}`);

  assert.equal(this.$('button:contains("Add some items")').length, 1);

});

test('renders with existing items', function(assert) {
  this.set('objects', this.server.createList('picker-value',1,'animal'));
  let _that = this;
  this.set('addAction', () => {
    let objects = _that.get('objects');
    let newItem = _that.server.create('picker-value',{value: 9, text: "new item"});
    objects.pushObject(newItem);
  });

  this.render(hbs`{{list-builder items=objects addNewItem=addAction}}`);

  let addItemsButton = this.$('button:contains("Add some items")');
  // assert.equal(this.$('li input[value="Cat"]').length, 1);

  assert.hasSelector('li input',1);
  assert.equal(addItemsButton.length, 1);

  addItemsButton.click();

  assert.hasSelector('li input', 2);

  this.$('a:contains("remove")').first().click();

  assert.hasSelector('li input', 1);
});
