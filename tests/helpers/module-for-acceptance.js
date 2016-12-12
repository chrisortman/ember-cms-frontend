import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { Promise } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();
      const documents = this.application.__container__.lookup('service:document-store');
      const db = documents.get('db');
      this.testDB = db;

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }

    },

    afterEach() {
      if ( window.server ) {
        window.server.shutdown();
      }

      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);

      return Promise.resolve(afterEach)
        .then(() => this.testDB.destroy())
        .then(() => destroyApp(this.application));
    }
  });
}
