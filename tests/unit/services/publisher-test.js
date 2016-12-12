import { moduleFor, test } from 'ember-qunit';
import PouchDB from 'pouchdb';
import Ember from 'ember';
import ENV from 'cms/config/environment';

var db;

moduleFor('service:publisher', 'Unit | Service | publisher', {
  // Specify the other units that are required for this test.
  needs: [],
  beforeEach() {
    db = new PouchDB( ENV.APP.LOCAL_DATABASE_NAME, {adapter: 'memory'} );
  },

  afterEach() {
    return db.destroy();
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('reports when not published', function(assert) {
  let service = this.subject();

  return service.hasPublished('app-information', db).then( (result) => {
    assert.equal(result, false);
  });

});

test('reports when already published', function(assert) {
  let service = this.subject();

  Ember.run( () => {

    db.put({
      _id: 'published-app-information'

    });
  });

  const done = assert.async();

  service.hasPublished('app-information', db).then( (result) => {
      assert.equal(result, true);
      done();
  });


});


