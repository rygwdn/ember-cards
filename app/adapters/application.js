/* globals Firebase */
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://resplendent-inferno-7894.firebaseio.com")
});
