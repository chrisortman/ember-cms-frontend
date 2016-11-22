import { Factory, trait, faker } from 'ember-cli-mirage';

export default Factory.extend({
  order(i) {
    return i;
  },

  value(i) {
    return i;
  },

  animal: trait({
    text: faker.list.cycle('Cat', 'Dog', 'Sheep'),
    afterCreate(pv) {
      pv.value = pv.text.toLowerCase();
    }
  })
});
