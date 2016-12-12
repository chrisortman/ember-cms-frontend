import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Service.extend({
  db: Ember.inject.service('local-pouch'),

  hasPublished(docKey, db) {

    const docId = `published-${ docKey}`;

    return new RSVP.Promise(function(resolve,reject) {

      console.log("GET DOC ID", docId);
      db.get('published-app-information').then( () => {
        // Ember.run( () => { 
          resolve(true); 
        // } );

      }).catch( (err) => {

        // Ember.run( () => {
          if ( err.status === 404 ) {
            //document does not exist
            resolve(false);
          } else {
            //Some problem ocurred
            reject(err);
          }
        // });
      });
    });
  }
});
