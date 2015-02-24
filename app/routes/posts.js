import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var subreddit = params.subreddit_name;
      return Ember.$.getJSON('http://www.reddit.com/r/' + subreddit + '.json').then(function(res) { return res.data.children;
      });
  }
});
