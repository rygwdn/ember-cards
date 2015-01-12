import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll("player");
  },
  actions: {
    delete: function(player) {
      player.destroyRecord();
      this.transitionTo("players.index");
      return false;
    }
  }
});
