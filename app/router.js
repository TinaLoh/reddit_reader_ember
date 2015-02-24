import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: "r/:subreddit_name"});
  this.route('search', { path: "/search/:query"});
  this.route('subsearch', { path: "search/subreddits/:query"});
  this.route('favorites');
});

export default Router;
