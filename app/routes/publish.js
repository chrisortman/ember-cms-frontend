import Ember from 'ember';
import PouchDB from 'pouchdb';

// var remote = new PouchDB('http://localhost:5984/cms_backend');
var db = new PouchDB('local_pouch');

export default Ember.Route.extend({
  model() {
    db.get("published-app-information").then( (doc) => {
      //document exists already
    }).catch( (err) => {
      if ( err.status === 404 ) {
        //document does not exist
        return null;
      } else {
        //Some problem ocurred
        throw err;
      }
    });
  }
});
