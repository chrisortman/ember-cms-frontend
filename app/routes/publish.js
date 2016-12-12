import Ember from 'ember';

export default Ember.Route.extend({
  publisher: Ember.inject.service(),
  db: Ember.inject.service('local-pouch'),

  model() {
    this.db.get("published-app-information").then( () => {
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
