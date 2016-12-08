import Ember from 'ember';
import PouchDB from 'pouchdb';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    const db = new PouchDB('test',{adapter: 'memory'});
    this.set('db', db);
  }
});
