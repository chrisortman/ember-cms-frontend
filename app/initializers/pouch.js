import ENV from 'cms/config/environment';
import PouchDB from 'pouchdb';

export function initialize( application ) {
  var db = PouchDB( ENV.APP.LOCAL_DATABASE_NAME );

  application.register('pouch:local', db, { instantiate: false });
  application.inject('service:document-store','db','pouch:local');
  application.inject('adapter:application', 'db', 'pouch:local');
  // appInstance.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'pouch',
  initialize
};
