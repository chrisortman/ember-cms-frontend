import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('consent-document', function() {
    this.route('edit', { path: '/:document_id/edit' });
  });
  this.route('surveys', function() {
    this.route('show', { path: '/:survey_id' });
    this.route('edit', { path: '/:survey_id/edit' });
  });
});

export default Router;
