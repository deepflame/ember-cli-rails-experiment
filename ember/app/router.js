import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');

    this.route('edit', {
      path: ':post_id/edit'
    });

    this.route('show', {
      path: ':post_id'
    });
  });
});

export default Router;
