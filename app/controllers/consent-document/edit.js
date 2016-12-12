import Ember from 'ember';

export default Ember.Controller.extend({
  currentSection: "Overview",
  refresh: true,

  sectionDescription : Ember.computed('currentSection','model.sections.length',function() {
    console.log("compute sectionDescription");
    let idx = this.get('model.sections').indexOf(this.get('currentSection'));
    let count = this.get('model.sections.length');
    return `Section ${idx+1} of ${count} - `;
  }),

  saveEnabled : Ember.computed('currentSection', function() {
    return true;
  }),

  actions: {
    mapper(section) {
      return section.id;
    },

  }
});
