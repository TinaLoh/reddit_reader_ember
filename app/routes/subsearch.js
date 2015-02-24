import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var q = params.query;
    //make an api call with subreddit query
    return Ember.$.getJSON('http:/www.reddit.com/subreddits/search.json?q=' + q).then(function(res) {
      return res.data.children;
    });
  }
});
