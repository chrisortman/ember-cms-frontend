import Ember from 'ember';

let consentDocument = {
  version: 'V2',
  lastPublished: '02/01/2016',
  sections: [
    title: 'Overview'
  ]
};

export default Ember.Route.extend({
  model() {
    return consentDocument;
  }
});
