// import Ember from 'ember';
import Ember from 'ember';
import { startMirage } from 'cms/initializers/ember-cli-mirage';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { assertionInjector, assertionCleanup } from '../../assertions';

moduleForComponent('question-editor', 'Integration | Component | question editor', {
  integration: true,
   beforeEach() {
    this.server = startMirage();
    assertionInjector(this);
  },
  afterEach() {
    this.server.shutdown();
    assertionCleanup();
  }
});

// let pickerQuestion = (container) => {
//   const store = container.lookup('service:store');
//   let question = Ember.run(() => {
//     let cat = store.createRecord('picker-value', {
//       value: 1,
//       order: 0,
//       text: 'Cat'
//     });
//     let dog = store.createRecord('picker-value', {
//       value: 2,
//       order: 1,
//       text: 'Dog'
//     });
//     let sheep = store.createRecord('picker-value', {
//       value: 3,
//       order: 2,
//       text: 'Sheep'
//     });
//
//     return store.createRecord('survey-question', {
//       title: "What's your favorite animal",
//       answerType: 'Picker',
//       pickerValues: [cat, dog, sheep]
//     });
//     console.log("TEST QUESTION", question);
//     return question;
//   });
// }

test('it renders picker question', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let pickerChoices = this.server.createList(
    'picker-value',
    3,
    'animal'
  ).map(x => Ember.Object.create(x));

  let pickerQuestion = Ember.Object.create({
    title: "What's your favorite animal",
    answerType:'Picker',
    pickerValues: pickerChoices,
  });


  console.log("QUESTION", pickerQuestion.get('title'));
  console.log("QUESTION", pickerQuestion.get('pickerValues'));
  this.set('externalAdd', () => { });
  this.set('question', pickerQuestion);

  this.render(hbs`{{question-editor question=question choiceAdd=(action externalAdd)}}`);

  assert.equal(this.$('.question-title').val().trim(), "What's your favorite animal");
  assert.hasSelector('ol.question-picker-input li', 3);

  // Template block usage:
});

