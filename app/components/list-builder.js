import Ember from 'ember';

const ListItem = Ember.Object.extend({
  selected : false,
  value : null,
});

export default Ember.Component.extend({

  items: [],

  listItems : Ember.computed.map('items', function(item) {
    return ListItem.create({value: item});
  }),

  actions: {
    addNewItem() {

      console.log("CLICKED");
      this.get('items').pushObject("");
    },

    removeItem(item) {
      console.log(item);
      this.get('items').removeObject(item.get('value'));
    }
  }
});
