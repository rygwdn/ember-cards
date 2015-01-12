import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("cards", function() {});

  this.resource("players", function() {
    this.route("new");

    this.route("show", {
      path: ":player_id",
    });

    this.route("edit", {
      path: ":player_id/edit",
    });
  });
});

export default Router;
