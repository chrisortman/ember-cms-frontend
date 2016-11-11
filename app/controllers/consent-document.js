import Ember from 'ember';

export default Ember.Controller.extend({
  currentSection: "Overview",

  sectionDescription : Ember.computed('currentSection','model.sections[]',function() {
    let idx = this.get('model.sections').indexOf(this.get('currentSection'));
    let count = this.get('model.sections.length');
    return `Section ${idx+1} of ${count} - ${this.get('currentSection.title')}`;
  }),

  actions: {
    mapper(section) {
      return section.id;
    }
  }
});
