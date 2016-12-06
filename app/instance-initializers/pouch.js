import ENV from 'cms/config/environment';
import PouchDB from 'pouchdb';

export function initialize(/* appInstance */) {
  var db = PouchDB( ENV.APP.LOCAL_DATABASE_NAME );

  appInstance.register('pouch:local', db, { instantiate: false });
  // appInstance.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'pouch',
  initialize
};
