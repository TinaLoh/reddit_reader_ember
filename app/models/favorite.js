import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  link: DS.attr('string'),
  author: DS.attr('string')
});
