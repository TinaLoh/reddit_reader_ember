import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var q = params.query;
     return Ember.$.getJSON('http://www.reddit.com/search.json?q=' + q).then(function(res){
      return res.data.children;
    });
  }
});
