import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function() {
      var searchSubreddits = this.controllerFor('application').get('searchSubreddits');
      var searchTerm = this.controllerFor('application').get('search');

      if (searchSubreddits) {
        this.transitionTo('subsearch', searchTerm);
      } else {
        this.transitionTo('search', searchTerm);
      }
    }
  }
});  
