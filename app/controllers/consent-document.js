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

  actions: {
    mapper(section) {
      return section.id;
    },

    addSection() {
      let store = this.get('store')
      let section = store.createRecord('consent-section', {
        title: 'New Section',
        document: this.get('model')
      });
      this.set('currentSection', section);
      const _this = this;
      this.set('refresh', false);
      Ember.run.next(function () {
          _this.set('refresh', true);
      });
    }
  }
});
