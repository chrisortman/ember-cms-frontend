import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  identifier(i) {
    return `TestQuestion_${i}`;
  },

  picker: trait({
    answerType: 'Picker',
  }),

});
