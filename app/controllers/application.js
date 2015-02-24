import Ember from 'ember';

export default Ember.Controller.extend({
  searchSubreddits: false,
  actions: {
    searchSubreddits: function() {
      //get search value from input, via controller
      var searchTerm = this.get('subSearch');
      console.log(searchTerm);
      //redirect to '/search/subreddits/:search'
      this.transitionToRoute('subsearch', searchTerm);  
    }
  }
});
