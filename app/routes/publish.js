import Ember from 'ember';

export default Ember.Route.extend({
  publisher: Ember.service.inject(),

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
