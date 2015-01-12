import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      console.log("cancel");
      this.transitionToRoute('players.show', this.get('model'));
      return false;
    },
  }
});
