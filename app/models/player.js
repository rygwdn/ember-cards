import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  display: Ember.computed('name', 'email', function() {
    return this.get('name') + ' (' + this.get('email') + ')';
  }),
});
