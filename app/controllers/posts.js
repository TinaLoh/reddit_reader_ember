import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['data.score'],
  sortAscending: false,

  actions: {
    changeSort: function() {
      this.toggleProperty('sortAscending');
    },

  addFavorite: function(post) {
    var fav = this.store.createRecord('favorite', {
      title: post.data.title,
      score: post.data.score,
      author: post.data.author,
      link: post.data.url
    });
      fav.save();
    }
  }
});
