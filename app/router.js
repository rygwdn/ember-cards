import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("cards", function() {});
  this.resource("players", function() {});
});

export default Router;