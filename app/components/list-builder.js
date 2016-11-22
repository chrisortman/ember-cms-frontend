import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    removeItem(item) {
      this.get('items').removeObject(item);
    }
  }
});
