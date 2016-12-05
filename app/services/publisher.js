import Ember from 'ember';
import RSVP from 'rsvp'
import PouchDB from 'pouchdb';
import ENV from 'cms/config/environment';

console.log("DB", ENV.APP.LOCAL_DATABASE_NAME );
var db = new PouchDB( ENV.APP.LOCAL_DATABASE_NAME );

export default Ember.Service.extend({
  hasPublished(docKey) {

    console.log("THIS", this);

    const docId = `published-${ docKey}`;


    return new RSVP.Promise(function(resolve,reject) {

      console.log("GET DOC ID", docId);
      db.get('published-app-information').then( (doc) => {
        Ember.run( function() { resolve(true); } );
      }).catch( (err) => {
        console.log("MY ERROR", err);
        if ( err.status === 404 ) {
          //document does not exist
          Ember.run( function() { resolve(false); });
        } else {
          //Some problem ocurred
          Ember.run( function() { reject(err); });
        }
      });
    });
  }
});
