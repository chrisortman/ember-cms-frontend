// import DS from 'ember-data';
import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';
import ENV from 'cms/config/environment';

PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/cms_backend');
var db = new PouchDB( ENV.LOCAL_DATABASE_NAME );

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


