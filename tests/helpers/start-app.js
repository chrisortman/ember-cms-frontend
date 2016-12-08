import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import PouchDB from 'pouchdb';

export default function startApp(attrs) {
  let application;

  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  let db = new PouchDB('poop',{adapter: 'memory'});

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
