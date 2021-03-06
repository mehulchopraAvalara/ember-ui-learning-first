import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('names');
  this.route('contact-us');
  this.route('fibo');
  this.route('books');
});

export default Router;
