// import DS from 'ember-data';
import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/cms_backend');
var db = new PouchDB('local_pouch');

db.sync(remote, {
  live: true,
  retry: true
});

// export default DS.JSONAPIAdapter.extend({
//   namespace: 'api',
//   host: 'http://localhost:4000'
// });

export default Adapter.extend({
  db: db
});


