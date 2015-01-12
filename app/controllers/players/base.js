import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.name',
    'model.email',
    function() {
      return !Ember.isEmpty(this.get('model.name')) && !Ember.isEmpty(this.get('model.email'));
    }
  ),

  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(player) {
          _this.transitionToRoute('players.show', player);
          console.log("saved");
        });
      } else {
        console.log("error");
        this.set('errorMessage', 'You must fill all the fields');
      }
      return false;
    },

    cancel: function() {
      return true;
    },
  }
});
