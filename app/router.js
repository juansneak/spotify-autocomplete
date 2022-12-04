import EmberRouter from '@ember/routing/router';
import config from 'spotify-autocomplete/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('credits', { path: '/credits' });
  this.route('token', { path: '/token' });
  this.route('search', { path: '/search' }, function() {
    this.route('artist', { path: '/artist/:id' });
    this.route('album', { path: '/album/:id' });
    this.route('track', { path: '/track/:id' });
  });
});
